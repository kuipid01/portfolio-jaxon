export interface Review {
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

export const reviews: Review[] = [
    {
        quote:
            "Stephen improved both our customer dashboard and backend APIs. He shipped faster pages, cleaner endpoints, and better error handling across the product.",
        name: "Kemi Adedeji",
        role: "Product Manager at Koinsave",
        avatar: "KA",
    },
    {
        quote:
            "Reliable engineering from UI to infrastructure. Stephen handled frontend polish and backend performance work without dropping quality.",
        name: "Daniel Okafor",
        role: "Engineering Lead at Nile NG",
        avatar: "DO",
    },
    {
        quote:
            "Stephen brought structure to our backend services and made our payment workflows more stable. Communication was clear and delivery was consistent.",
        name: "Aisha Bello",
        role: "Operations Lead at Fintech Startup",
        avatar: "AB",
    },
    {
        quote:
            "What stands out is his fullstack mindset. He thinks about database design, API contracts, and user flow as one system.",
        name: "Tolu Akinyemi",
        role: "CTO at OneLoop",
        avatar: "TA",
    },
    {
        quote:
            "Stephen quickly understood our product constraints and implemented practical solutions that worked for both users and internal teams.",
        name: "Favour James",
        role: "Founder at Duo World",
        avatar: "FJ",
    },
    {
        quote:
            "He is strong on backend logic and still cares deeply about frontend clarity. That balance made collaboration across teams much easier.",
        name: "Ibrahim Musa",
        role: "Senior Product Designer",
        avatar: "IM",
    },
];
