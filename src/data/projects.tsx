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
    category: "Android",
    title: "Befast",
    src: "/assets/projects/befast-1.png",
    screenshots: ["befast-1.png", "befast-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/befast",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A mobile app with animated splash screen, phone number sign-up with
            OTP, social logins, and smart notification handling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "lookup",
    category: "Android / AI",
    title: "Look Up",
    src: "/assets/projects/lookup-1.png",
    screenshots: ["lookup-1.png", "lookup-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/lookup",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A visual search app like Google Lens using image labeling and Google
            APIs to scan and search image content.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "weatherapp",
    category: "Android",
    title: "Weather App",
    src: "/assets/projects/weather-1.png",
    screenshots: ["weather-1.png", "weather-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/weatherapp",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Clean weather app (Java + XML) using OpenWeatherMap API with
            animated GIF backgrounds and modern UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "aditya-learn",
    category: "Android",
    title: "Aditya Learn App",
    src: "/assets/projects/aditya-1.png",
    screenshots: ["aditya-1.png", "aditya-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/aditya-learn",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Android app for Aditya students to access resources, assignments,
            and college updates in one place.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "cybercafe",
    category: "Web / Django",
    title: "Cyber Cafe Management System",
    src: "/assets/projects/cybercafe-1.png",
    screenshots: ["cybercafe-1.png", "cybercafe-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/cybercafe",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Networking-based management system for cyber cafés using Python,
            Django, HTML, CSS, JavaScript, and MySQL.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "kernel-projects",
    category: "Android / Kernel",
    title: "Custom Kernel Projects",
    src: "/assets/projects/kernel-1.png",
    screenshots: ["kernel-1.png", "kernel-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/kernel-projects",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built and optimized custom kernels for Samsung Galaxy S20 FE and
            other Snapdragon devices with performance tuning and battery
            optimizations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "rom-porting",
    category: "Android / ROMs",
    title: "ROM Porting Projects",
    src: "/assets/projects/rom-1.png",
    screenshots: ["rom-1.png", "rom-2.png"],
    skills: { frontend: [], backend: [] },
    live: "",
    github: "https://github.com/YOUR_USERNAME/rom-porting",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ported custom ROMs like One UI 7, PixelOS, and AOSP-based builds
            for Samsung and Realme devices. Fixed RIL, WiFi, camera, and
            kernel-level bugs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
