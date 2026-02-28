export interface Experience {
    role: string;
    company: string;
    period: string;
}

export const experiences: Experience[] = [
    {
        role: "Freelance Fullstack Developer",
        company: "Independent",
        period: "2025 - Present",
    },
    {
        role: "Fullstack Developer",
        company: "OneLoop (Health App)",
        period: "2023 - 2024",
    },
    {
        role: "Senior Backend Engineer",
        company: "Nile NG",
        period: "2024 - 2026",
    },
    {
        role: "Senior Backend Engineer",
        company: "Koinsave (Fintech - Mobile Payments)",
        period: "2022 - 2023",
    },
    {
        role: "Junior Developer",
        company: "Duo World",
        period: "2021 - 2022",
    },
];

export interface Stat {
    value: string;
    suffix: string;
    label: string;
}

export const stats: Stat[] = [
    { value: "7", suffix: "+", label: "Years of experience" },
    { value: "34", suffix: "+", label: "Projects completed" },
    { value: "3", suffix: "+", label: "Fintech products built" },
    { value: "98", suffix: "%", label: "Client satisfaction" },
    { value: "10", suffix: "+", label: "Teams collaborated with" },
    { value: "3", suffix: "", label: "Core domains (fintech, health, ecommerce)" },
];
