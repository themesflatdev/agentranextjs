export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

// Full 14-member roster from team.html, in source order. /about reuses a
// specific 5-name subset of this array (see TeamPreviewSection.tsx) — it
// filters by id rather than slicing, since James Anderson sits between
// Robert Johnson and Sophia Martinez here but does NOT appear on /about.
export const teamMembers: TeamMember[] = [
  {
    id: "john-anderson",
    name: "John Anderson",
    position: "AI Solutions Architect",
    image: "/assets/images/avatar/team-1.jpg",
  },
  {
    id: "michael-thompson",
    name: "Michael Thompson",
    position: "Full-Stack Developer",
    image: "/assets/images/avatar/team-2.jpg",
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    position: "UI/UX Designer",
    image: "/assets/images/avatar/team-3.jpg",
  },
  {
    id: "robert-johnson",
    name: "Robert Johnson",
    position: "DevOps Engineer",
    image: "/assets/images/avatar/team-4.jpg",
  },
  {
    id: "james-anderson",
    name: "James Anderson",
    position: "CEO, eTech Solutions",
    image: "/assets/images/avatar/team-12.jpg",
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    position: "AI Research Specialist",
    image: "/assets/images/avatar/team-5.jpg",
  },
  {
    id: "alexander-mitchell",
    name: "Alexander Mitchell",
    position: "UI/UX Designer",
    image: "/assets/images/avatar/team-13.jpg",
  },
  {
    id: "benjamin-cooper",
    name: "Benjamin Cooper",
    position: "DevOps Engineer",
    image: "/assets/images/avatar/team-6.jpg",
  },
  {
    id: "joseph-mitchell",
    name: "Joseph Mitchell",
    position: "AI Solutions Architect",
    image: "/assets/images/avatar/team-7.jpg",
  },
  {
    id: "christopher-young",
    name: "Christopher Young",
    position: "Full-Stack Developer",
    image: "/assets/images/avatar/team-8.jpg",
  },
  {
    id: "william-harris",
    name: "William Harris",
    position: "UI/UX Designer",
    image: "/assets/images/avatar/team-9.jpg",
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    position: "DevOps Engineer",
    image: "/assets/images/avatar/team-14.jpg",
  },
  {
    id: "matthew-collins",
    name: "Matthew Collins",
    position: "Software Development",
    image: "/assets/images/avatar/team-10.jpg",
  },
  {
    id: "alexander-reed",
    name: "Alexander Reed",
    position: "AI Research Specialist",
    image: "/assets/images/avatar/team-11.jpg",
  },
];
