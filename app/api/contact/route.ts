import { NextResponse } from "next/server";
import { createDbClient } from "@/lib/db/client";
import { contactRequests } from "@/db/schema";

type ContactPayload = {
  fullName: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  description: string;
};

function sanitizeInput(payload: ContactPayload) {
  return {
    fullName: payload.fullName.trim(),
    email: payload.email.trim().toLowerCase(),
    company: payload.company?.trim() || null,
    website: payload.website?.trim() || null,
    service: payload.service.trim(),
    description: payload.description.trim(),
  };
}

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.fullName?.trim()) errors.push("Full name is required.");
  if (!payload.email?.trim()) errors.push("Email is required.");
  if (!payload.service?.trim()) errors.push("Service is required.");
  if (!payload.description?.trim()) errors.push("Project description is required.");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (payload.email && !emailRegex.test(payload.email)) {
    errors.push("Email format is invalid.");
  }

  if (payload.website) {
    try {
      // Basic URL validation for optional website field.
      new URL(payload.website);
    } catch {
      errors.push("Website URL is invalid.");
    }
  }

  return errors;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const validationErrors = validatePayload(body);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { ok: false, message: validationErrors[0] },
        { status: 400 }
      );
    }

    const data = sanitizeInput(body);

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Contact API is not configured yet. Add DATABASE_URL and run migrations.",
        },
        { status: 503 }
      );
    }

    const db = createDbClient();

    await db.insert(contactRequests).values({
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      website: data.website,
      service: data.service,
      description: data.description,
    });

    return NextResponse.json(
      { ok: true, message: "Request received successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to submit contact request:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to send request right now." },
      { status: 500 }
    );
  }
}
