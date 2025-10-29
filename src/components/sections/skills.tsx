import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiKotlin,
  SiGnubash,
  SiGo,
  SiRust,
  SiDart,
  SiAndroid,
  SiFirebase,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type SkillItem = { label: string; icon: React.ReactNode };
const Section = ({ title, items }: { title: string; items: SkillItem[] }) => (
  <div className="mb-10">
    <h3 className="text-sm tracking-wider text-neutral-400 mb-3 uppercase">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {items.map((s) => (
        <motion.div
          key={title + s.label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-md border border-neutral-700/40 bg-white/30 dark:bg-black/30 backdrop-blur px-3 py-2 text-sm"
        >
          <span className="text-xl">{s.icon}</span>
          <span>{s.label}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen md:min-h-[120dvh]">
      <div className="mb-10">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 max-w-3xl font-normal text-base text-center text-neutral-300">
          Animated skills are visible in the hero above. Grid below lists all technologies clearly.
        </p>
        <div className="h-px w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
      </div>
      <div className="container mx-auto px-6">
        <Section
          title="Programming Languages"
          items={[
            { label: "C", icon: <SiC /> },
            { label: "C++", icon: <SiCplusplus /> },
            { label: "Java", icon: <FaJava /> },
            { label: "Python", icon: <SiPython /> },
            { label: "JavaScript", icon: <SiJavascript /> },
            { label: "TypeScript", icon: <SiTypescript /> },
            { label: "PHP", icon: <SiPhp /> },
            { label: "Kotlin", icon: <SiKotlin /> },
            { label: "Bash", icon: <SiGnubash /> },
            { label: "Go", icon: <SiGo /> },
            { label: "Rust", icon: <SiRust /> },
            { label: "Dart", icon: <SiDart /> },
          ]}
        />
        <Section
          title="Android & Cross-Platform"
          items={[
            { label: "Android", icon: <SiAndroid /> },
            { label: "Firebase", icon: <SiFirebase /> },
            { label: "Flutter", icon: <SiFlutter /> },
          ]}
        />
        <Section
          title="Frontend"
          items={[
            { label: "HTML5", icon: <SiHtml5 /> },
            { label: "CSS3", icon: <SiCss3 /> },
            { label: "Bootstrap", icon: <SiBootstrap /> },
            { label: "Tailwind", icon: <SiTailwindcss /> },
            { label: "React", icon: <SiReact /> },
            { label: "Next.js", icon: <SiNextdotjs /> },
            { label: "TypeScript", icon: <SiTypescript /> },
          ]}
        />
        <Section
          title="Backend"
          items={[
            { label: "Node.js", icon: <SiNodedotjs /> },
            { label: "Express", icon: <SiExpress /> },
            { label: "Django", icon: <SiDjango /> },
            { label: "Flask", icon: <SiFlask /> },
            { label: "Laravel", icon: <SiLaravel /> },
          ]}
        />
        <Section
          title="Databases"
          items={[
            { label: "MySQL", icon: <SiMysql /> },
            { label: "SQLite", icon: <SiSqlite /> },
            { label: "PostgreSQL", icon: <SiPostgresql /> },
            { label: "MongoDB", icon: <SiMongodb /> },
            { label: "Redis", icon: <SiRedis /> },
            { label: "Firebase", icon: <SiFirebase /> },
          ]}
        />
        <Section
          title="AI / ML"
          items={[
            { label: "NumPy", icon: <SiNumpy /> },
            { label: "Pandas", icon: <SiPandas /> },
            { label: "scikit-learn", icon: <SiScikitlearn /> },
            { label: "TensorFlow", icon: <SiTensorflow /> },
            { label: "Keras", icon: <SiKeras /> },
            { label: "PyTorch", icon: <SiPytorch /> },
            { label: "OpenCV", icon: <SiOpencv /> },
          ]}
        />
        <Section
          title="Cloud & DevOps"
          items={[
            { label: "Docker", icon: <SiDocker /> },
            { label: "GitHub Actions", icon: <SiGithubactions /> },
            { label: "Vercel", icon: <SiVercel /> },
            { label: "Netlify", icon: <SiNetlify /> },
            { label: "Firebase", icon: <SiFirebase /> },
            { label: "AWS", icon: <SiAmazonaws /> },
          ]}
        />
        <Section
          title="OS & Kernel"
          items={[{ label: "Linux", icon: <SiLinux /> }, { label: "Bash", icon: <SiGnubash /> }]}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
