import type { DocsSiteData } from "../types/configDataTypes";

const docsSiteData: DocsSiteData = {
  title: "Supra",
  description:
    "A modern, fast, and feature-rich documentation theme built with Astro v5 and Tailwind CSS v4.",
  navSocials: [
    // {
    //   social: "GitHub",
    //   link: "https://github.com/Boston343",
    //   icon: "mdi/github",
    // },
  ],
  footerSocials: [
    {
      social: "X formerly known as Twitter",
      link: "https://x.com/SUPRA_Labs",
      icon: "tabler/brand-x",
    },
    {
      social: "GitHub",
      link: "https://github.com/Supra-Labs",
      icon: "tabler/brand-github",
    },
  ],
  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/logo.png",
    alt: "Supra",
  },
  // Your information for SEO purposes
  author: {
    name: "Supra MultiVM L1 Chain",
    email: " ",
    twitter: "SUPRA_Labs",
  },
};

export default docsSiteData;