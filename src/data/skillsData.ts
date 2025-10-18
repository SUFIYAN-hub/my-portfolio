export interface Skill {
  name: string;
  category: string;
  level: number; // 1-100
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 50 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "JavaScript", category: "Frontend", level: 95 },
  { name: "HTML/CSS", category: "Frontend", level: 95 },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Express", category: "Backend", level: 85 },
  { name: "MongoDB", category: "Backend", level: 80 },
  { name: "Firebase", category: "Backend", level: 80 },
  { name: "PostgreSQL", category: "Backend", level: 75 },
  { name: "REST APIs", category: "Backend", level: 90 },
  
  // Tools & Others
  { name: "Git", category: "Tools", level: 85 },
  { name: "Github", category: "Tools", level: 90 },
  { name: "Vercel", category: "Tools", level: 90 },
  { name: "Postman", category: "Tools", level: 90 },
  { name: "Render", category: "Tools", level: 90 },
];

export const skillCategories = ["All", "Frontend", "Backend", "Tools"];