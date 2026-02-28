export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectSection {
  heading: string;
  text: string;
  images?: string[];
}

export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string;
  category: string;
  meta: ProjectMeta[];
  sections: ProjectSection[];
  links?: Links[];
}

interface Links {
  label: string;
  value: string;
}
export const categories = [
  "All Projects",
  "Branding",
  "Web design",
  "App design",
  "Web app",
  "Dashboard",
];

export const projects: Project[] = [
  {
    title: "Kuifin",
    slug: "kuifin",
    image: "/images/padipay.png",
    description:
      "Designed and delivered a scalable lending-as-a-service platform that enables businesses and individuals to issue, manage, and grow loan products using reliable financial infrastructure.",
    category: "FinTech / Web App",
    meta: [
      { label: "Project Name", value: "Kuifin" },
      { label: "Product Type", value: "Web Application" },
      { label: "Industry", value: "FinTech / Lending Infrastructure" },
      { label: "Completion Date", value: "In Progress" },
      { label: "Timeline", value: "12  Months" },
    ],
    links: [
      { label: "Link", value: "http://padipay-kuipid.vercel.app/" },
      { label: "Github", value: "https://github.com/kuipid01/" },
    ],
    sections: [
      {
        heading: "Overview",
        text: "Kuifin is a lending-as-a-service platform built to help businesses, cooperatives, and financial operators create and manage loan products without building complex financial infrastructure from scratch. The platform focuses on transparency, automation, and scalability — allowing operators to onboard borrowers, disburse loans, track repayments, and manage risk from a single unified dashboard.",
        images: [
          "/images/kuifin/dashboard.png",
          "/images/kuifin/loan-products.png",
          "/images/kuifin/analytics.png",
        ],
      },
      {
        heading: "Problems",
        text: "Many small and mid-sized financial operators struggle with fragmented systems for loan management, manual repayment tracking, poor borrower visibility, and limited reporting tools. Existing solutions were either too rigid, too expensive, or required deep technical expertise to customize. These challenges led to operational inefficiencies, higher default risk, and poor user trust.",
        //   images: [
        //     "/images/kuifin/legacy-flow.png",
        //     "/images/kuifin/manual-process.png",
        //   ],
      },
      {
        heading: "Solutions",
        text: "Kuifin introduced a modular lending infrastructure that simplifies loan creation, borrower onboarding, repayment scheduling, and real-time monitoring. I designed intuitive workflows for administrators and borrowers, built a flexible loan configuration system, and implemented clear financial reporting and risk indicators. The result was a platform that reduced manual operations, improved repayment visibility, and supported multiple lending models at scale.",
        images: [
          "/images/kuifin/create-loan.png",
          "/images/kuifin/borrower-profile.png",
          "/images/kuifin/repayment-tracking.png",
        ],
      },
    ],
  },
  {
    title: "Nile",
    slug: "nile",
    image: "/images/nile.png",
    description:
      "A scalable multi-tenant e-commerce platform where I led backend architecture, database design, and core infrastructure development.",
    category: "E-Commerce Platform",
    meta: [
      { label: "Project Name", value: "Nile" },
      { label: "Product Type", value: "Multi-Tenant E-Commerce Platform" },
      { label: "Industry", value: "E-Commerce" },
      { label: "Role", value: "Lead Backend Engineer" },
      { label: "Architecture", value: "Microservices" },
    ],
    links: [{ label: "Link", value: "http://nile.ng/" }],
    sections: [
      {
        heading: "Overview",
        text: "Nile is a multi-tenant e-commerce platform built to support multiple independent merchants within a single system. The platform was designed to handle high traffic, isolated tenant data, and flexible business logic while maintaining strong performance and reliability.",
        images: ["/images/nile.png", "/images/nile/nile1.png", "/images/nile/nile2.png"],
      },
      {
        heading: "Responsibilities",
        text: "As the lead backend engineer, I was responsible for designing the backend architecture, implementing core business services, and managing data isolation for tenants. This included database schema design, API contracts, authentication flows, and coordination between multiple microservices.",
          images: ["/images/nile.png", "/images/nile/nile1.png", "/images/nile/nile2.png"],
      },
      {
        heading: "Key Contributions",
        text: "I implemented tenant-aware data models, optimized database queries for scale, and built resilient service-to-service communication patterns. I also handled senior-level backend tasks such as performance tuning, production debugging, and ensuring system reliability under load.",
          images: ["/images/nile/nile3.png", "/images/nile/nile4.png",],
      },
    ],
  },
  {
    title: "Kuipid",
    slug: "kuipid",
    image: "/images/kuipid.png",
    description:
      "An e-commerce and media management platform with a Go-based backend focused on real-time updates, concurrency, and scalable integrations.",
    category: "E-Commerce / Media Platform",
    meta: [
      { label: "Project Name", value: "Kuipid" },
      { label: "Product Type", value: "E-Commerce & Media Management App" },
      { label: "Industry", value: "Retail / Social Commerce" },
      { label: "Role", value: "Backend Engineer" },
      { label: "Backend Stack", value: "Go" },
    ],
    links: [{ label: "Link", value: "https://kuipid.com/" }],
    sections: [
      {
        heading: "Overview",
        text: "Kuipid is a platform that allows merchants to manage products from a single dashboard and distribute them across multiple social media and sales channels. The system was built to support real-time updates, efficient data synchronization, and extensible integrations.",
        images: ["/images/kuipid.png", "/images/kuipid/kuipid1.png", "/images/kuipid/kuipid2.png"],
      },
      {
        heading: "Backend Architecture",
        text: "The backend was written in Go, leveraging goroutines and channels to handle concurrency-heavy workloads. WebSockets were used to support real-time product updates and status notifications across connected clients.",
        images: ["/images/kuipid/kuipid3.png", "/images/kuipid/kuipid4.png"],
      },
      {
        heading: "Engineering Focus",
        text: "My work focused on mid-level backend engineering challenges such as concurrency control, API performance, background job processing, and maintaining data consistency across multiple platforms. I also contributed to system reliability and maintainability through clean service boundaries and structured error handling.",
        
      },
    ],
  },
  {
    title: "Trex",
    slug: "trex",
    image: "/images/trex.png",
    description:
      "A collaborative project management platform where I contributed to core features such as task and project management as part of a development team.",
    category: "Productivity Software",
    meta: [
      { label: "Project Name", value: "Trex" },
      { label: "Product Type", value: "Project Management Software" },
      { label: "Industry", value: "Productivity / SaaS" },
      { label: "Role", value: "Software Engineer" },
      { label: "Team", value: "Cross-functional Team" },
    ],
    links: [{ label: "Link", value: "https://www.trexworkspace.com/" }],
    sections: [
      {
        heading: "Overview",
        text: "Trex is a project management platform designed to help teams plan, track, and collaborate on work efficiently. The product focuses on clear task ownership, project visibility, and real-time collaboration.",
        images: [],
      },
      {
        heading: "Feature Development",
        text: "I worked as part of the engineering team to build and maintain core features including task creation, task assignment, project workflows, and status tracking. My contributions involved implementing backend logic and integrating features with existing systems.",
        images: [],
      },
      {
        heading: "Collaboration & Delivery",
        text: "This project involved close collaboration with other engineers and product stakeholders. I participated in feature planning, code reviews, and iterative delivery, ensuring new features aligned with overall product goals and technical standards.",
        images: [],
      },
    ],
  },
];
