import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "befast",
    category: "Android App Development",
    title: "Befast App",
    src: "/assets/projects/g1.png",
    screenshots: ["g1.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Befast is a modern Android onboarding app featuring an animated splash screen, OTP-based sign-up, and social logins (Google, Facebook). It handles location and notification permissions seamlessly to enhance the user onboarding experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "glacial-lake-ai",
    category: "AI / Machine Learning",
    title: "Glacial Lake Detection (ISRO Hackathon)",
    src: "/assets/projects/g6.png",
    screenshots: ["g6.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI model designed to automatically detect and monitor glacial lakes from satellite imagery. It identifies water bodies and changes over time using image segmentation and classification techniques.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "weatherapp",
    category: "Android App Development",
    title: "Weather App",
    src: "/assets/projects/g2.png",
    screenshots: ["g2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A clean and intuitive weather application that fetches real-time data using the OpenWeatherMap API. It displays temperature, humidity, and conditions with animated GIF backgrounds that match current weather states.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "lookup",
    category: "AI + Android App",
    title: "Look Up (Visual Search App)",
    src: "/assets/projects/g3.png",
    screenshots: ["g3.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Look Up allows users to scan or upload images to identify objects, text, or landmarks using machine learning. Inspired by Google Lens, it displays visual search results and contextual information.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "cybercafe",
    category: "Web + Networking Project",
    title: "Cyber Café Management System",
    src: "/assets/projects/g4.png",
    screenshots: ["g4.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack Django-based system that automates client sessions, system usage tracking, and billing in a cyber café. It features admin dashboards, database logging, and LAN-based control.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "ai-browser",
    category: "AI Automation / Web App",
    title: "AI Browser (Qubit Project)",
    src: "/assets/projects/g5.png",
    screenshots: ["g5.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-driven browser that automates web tasks in real time. Users enter natural-language instructions, and the browser performs the requested operations while capturing frame-by-frame screenshots.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "sahayak-ai",
    category: "AI / Education Technology",
    title: "Sahayak – AI Teaching Assistant (ISRO Hackathon)",
    src: "/assets/projects/g7.png",
    screenshots: ["g7.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI assistant designed to support teachers by generating lesson plans, quizzes, and summaries dynamically using Gemini/Vertex AI. Adapts to student learning levels.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "oneui7-port",
    category: "System / ROM Development",
    title: "Samsung One UI 7 Port (r8q)",
    src: "/assets/projects/g8.png",
    screenshots: ["g8.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ported Samsung One UI 7 ROM from Galaxy S20 5G (x1q) to Galaxy S20 FE (r8q). Ongoing fixes for camera, RIL, Wi-Fi, Bluetooth, and sensors using EasyROMMaker.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "blazex-kernel",
    category: "Kernel / System Development",
    title: "Blazex & Yor_Forger Custom Kernel",
    src: "/assets/projects/g9.png",
    screenshots: ["g9.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed custom kernels from source for Samsung Galaxy S20 FE using Clang 16 on Gitpod. Focused on optimizing performance, reducing power drain, and customizing CPU/GPU governors.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "ai-task-automation",
    category: "AI Automation / Desktop & Web Hybrid",
    title: "AI Task Automation App (Qubit Extended)",
    src: "/assets/projects/g10.png",
    screenshots: ["g10.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An enhanced version of the AI Browser that executes real-time automation tasks across system browsers (Chrome, Edge). Ships as cross-platform executables for a seamless user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
