export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dev Verse",
    description: "All-in-one developer platform with integrated docs, snippet library, JS terminal, AI assistant, and contact support.",
    longDescription: "Built a comprehensive developer toolkit that combines essential development resources in one place. Features include searchable documentation, organized code snippet management, live JavaScript terminal for testing, AI-powered coding assistant, and integrated contact support for seamless communication.",
    image: "/images/projects/devverse.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
    githubUrl: "https://github.com/SUFIYAN-hub/dev-verse-website",
    liveUrl: "https://dev-verse-website.vercel.app/",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "MediConnect",
    description: "Telemedicine platform connecting patients and doctors through secure, real-time video consultations for accessible healthcare.",
    longDescription: "Developed a comprehensive healthcare platform that enables remote medical consultations through high-quality video calls. Features include secure patient-doctor matching, real-time video communication, appointment scheduling, and to ensure patient privacy.",
    image: "/images/projects/mediconnect.jpg",
    technologies: ["React", "PeerJS", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/SUFIYAN-hub/mediconnect-hackathon",
    liveUrl: "https://mediconnect-hackathon.vercel.app/",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Password Manager",
    description: "Secure password manager with end-to-end encryption, credential storage, password generation, and master password authentication.",
    longDescription: "Built a robust password management system that securely stores and encrypts user credentials using industry-standard encryption algorithms. Features include secure password vault, strong password generator, master password authentication, organized credential categories, and clipboard integration for easy access while maintaining maximum security.",
    image: "/images/projects/passop.jpg",
    technologies: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/SUFIYAN-hub/Password-Manager",
    liveUrl: "https://password-manager-delta-smoky.vercel.app/",
    category: "Frontend"
  }
];

export const categories = ["All", "Full Stack", "Frontend", "Backend"];