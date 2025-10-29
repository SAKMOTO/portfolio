const config = {
  title: "Mohammed Harun | CSE Student & Developer",
  description: {
    long:
      "CSE student passionate about AI/ML, custom Android development, and building innovative apps. Experienced in system-level work (ROMs, kernels) and application development (mobile & web).",
    short: "CSE student | AI/ML Enthusiast | App & Web Developer",
  },
  keywords: [
    "Mohammad Harun",
    "CSE",
    "Developer",
    "AI",
    "ML",
    "Android",
    "Custom ROMs",
    "Portfolio",
  ],
  author: "Mohammed Harun",
  email: "mohammedharun3916@gmail.com",
  site: "https://your-portfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  resumeUrl: "/assets/resume.pdf",
  social: {
    github: "https://github.com/SAKMOTO/HARUN",
    linkedin: "https://www.linkedin.com/in/mohammed-harun-a5026233a",
    twitter: "https://x.com/YOUR_HANDLE",
    instagram: "https://www.instagram.com/legendary_king_harun/",
    // Optional: keep facebook key empty or remove if unused in UI
    facebook: "",
  },
};
export { config };
