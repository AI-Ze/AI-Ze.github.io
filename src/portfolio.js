/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ze Chen's Portfolio",
  description:
    "Undergraduate student at Communication University of China, focused on computer vision and deep generative models research.",
  og: {
    title: "Ze Chen Portfolio",
    type: "website",
    url: "https://AI-Ze.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ze Chen",
  logo_name: "ZeChen",
  nickname: "陈泽",
  subTitle:
    "Undergraduate student at Communication University of China, passionate about computer vision and deep generative models. Currently focused on research in image quality assessment and Kolmogorov-Arnold networks.",
  resumeLink: "",
  portfolio_repository: "https://github.com/AI-Ze/AI-Ze.github.io",
  githubProfile: "https://github.com/CUC-Chen",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/CUC-Chen",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:your.email@example.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Computer Vision & Deep Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Research in image quality assessment and deep generative models",
        "⚡ Experience with Kolmogorov-Arnold networks and neural architecture design",
        "⚡ Developing models for realistic image sharpness assessment and blind IQA",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/CUC-Chen",
    },
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#4285F4",
      },
      profileLink: "https://scholar.google.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Communication University of China",
      subtitle: "B.Eng. in Artificial Intelligence",
      logo_path: "cuc_logo.png",
      alt_name: "CUC",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Member of the Multimedia Intelligent Processing Group (MIPG) at State Key Laboratory of Media Convergence and Communication",
        "⚡ Focused on computer vision research, particularly in image quality assessment and deep generative models",
        "⚡ Published research on Kolmogorov-Arnold networks for image quality assessment at ICASSP 2025 and JVCIR",
      ],
      website_link: "https://www.cuc.edu.cn/",
    },
    {
      title: "Shanghai Shixi High School",
      subtitle: "High School Education",
      logo_path: "shixi_logo.png",
      alt_name: "Shanghai Shixi High School",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Research intern at School of Physics and Astronomy, Shanghai Jiao Tong University (2021-2023)",
        "⚡ Developed strong foundation in mathematics and physics",
        "⚡ Early exposure to scientific research methodologies",
      ],
      website_link: "https://www.shsxhs.cn/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Research Experience",
  subtitle: "Research Internships and Academic Work",
  description:
    "I am passionate about computer vision research, particularly in image quality assessment and deep generative models. My research focuses on developing novel neural architectures and applying them to real-world problems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research",
      work: true,
      experiences: [
        {
          title: "Research Intern",
          company: "Multimedia Intelligent Processing Group (MIPG)",
          company_url: "https://www.cuc.edu.cn/",
          logo_path: "cuc_logo.png",
          duration: "September 2024 - Present",
          location: "Beijing, China",
          description:
            "Working on computer vision research at the State Key Laboratory of Media Convergence and Communication. Focus on image quality assessment, Kolmogorov-Arnold networks, and deep generative models. Published papers at ICASSP 2025 and JVCIR.",
          color: "#0C9D58",
        },
        {
          title: "Research Intern",
          company: "Shanghai Jiao Tong University",
          company_url: "https://www.sjtu.edu.cn/",
          logo_path: "sjtu_logo.png",
          duration: "July 2021 - January 2023",
          location: "Shanghai, China",
          description:
            "Research intern at School of Physics and Astronomy. Worked on physics-related computational projects and developed strong analytical and research skills. Gained early exposure to scientific research methodologies and academic writing.",
          color: "#0C4DA2",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My research projects focus on computer vision, particularly image quality assessment using novel neural architectures like Kolmogorov-Arnold networks.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "My research papers on image quality assessment and Kolmogorov-Arnold networks.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "taylor-kan-iqa",
      name:
        "Taylor expansion-based Kolmogorov-Arnold network for blind image quality assessment",
      createdAt: "2025-05-01T00:00:00Z",
      description: "Paper accepted to JVCIR (SCI, JCR Q2)",
      url: "https://arxiv.org/abs/2505.21592",
    },
    {
      id: "kan-risa",
      name:
        "Exploring Kolmogorov-Arnold networks for realistic image sharpness assessment",
      createdAt: "2024-12-01T00:00:00Z",
      description: "Paper accepted to ICASSP 2025",
      url: "https://arxiv.org/pdf/2409.07762",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to reach out for research collaborations, academic discussions, or any questions about computer vision and deep learning. I'm always open to connecting with fellow researchers and students.",
  },
  blogSection: {
    title: "Research",
    subtitle:
      "Check out my published papers on image quality assessment and Kolmogorov-Arnold networks.",
    link: "https://github.com/CUC-Chen",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Communication University of China, Beijing, China",
    locality: "Beijing",
    country: "China",
    region: "Beijing",
    postalCode: "100024",
    streetAddress: "Communication University of China",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/CUC",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
