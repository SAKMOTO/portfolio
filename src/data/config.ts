const config = {
  title: "Mohammad Harun | CSE Student & Developer",
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
  author: "Mohammad Harun",
  email: "youremail@example.com",
  site: "https://your-portfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_PROFILE",
    twitter: "https://x.com/YOUR_HANDLE",
    instagram: "https://instagram.com/YOUR_HANDLE",
    // Optional: keep facebook key empty or remove if unused in UI
    facebook: "",
  },
};
export { config };
