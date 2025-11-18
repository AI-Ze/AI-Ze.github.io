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
  title: "Ze Chen (陈泽)",
  logo_name: "Ze Chen",
  nickname: "",
  subTitle:
    "I am an undergraduate student at the School of Information and Communication Engineering, Communication University of China, and a member of the Multimedia Intelligent Processing Group (MIPG).",
  resumeLink: "",
  portfolio_repository: "https://github.com/CUC-Chen",
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
    name: "E-mail",
    link: "mailto:chenze@cuc.edu.cn",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Computer Vision & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ AIGC: Controllable Video Generation and Video Editing",
        "⚡ AI for Science: Mathematical Physical Equations, Optics",
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
      duration: "September 2023 - Present",
      descriptions: [
        "⚡ Undergraduate Studies at School of Information and Communication Engineering",
        "⚡ Member of the Multimedia Intelligent Processing Group (MIPG)",
        "⚡ Research focus on computer vision and deep generative models",
      ],
      website_link: "https://www.cuc.edu.cn/",
    },
    {
      title: "Shanghai Shixi High School",
      subtitle: "High School Education",
      logo_path: "shixi_logo.png",
      alt_name: "Shanghai Shixi High School",
      duration: "September 2020 - June 2023",
      descriptions: [
        "⚡ Completed high school education with strong foundation in mathematics and physics",
        "⚡ Early research experience at Shanghai Jiao Tong University",
        "⚡ Developed interest in scientific research and AI",
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
  title: "Experience",
  subtitle: "Education and Research",
  description:
    "My academic journey and research experiences in computer vision, AIGC, and AI for Science.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research Experiences",
      work: true,
      experiences: [
        {
          title: "Research Intern",
          company: "Multimedia Intelligent Processing Group (MIPG)",
          company_url: "https://www.cuc.edu.cn/",
          logo_path: "cuc_logo.png",
          duration: "September 2024 - Present",
          location: "Communication University of China, Beijing",
          description:
            "Research at State Key Laboratory of Media Convergence and Communication. Focus on computer vision, image quality assessment, and Kolmogorov-Arnold networks. Published papers at ICASSP 2025 and JVCIR on novel neural architectures for IQA.",
          color: "#0C9D58",
        },
        {
          title: "Research Intern",
          company: "School of Physics and Astronomy",
          company_url: "https://www.sjtu.edu.cn/",
          logo_path: "sjtu_logo.png",
          duration: "July 2021 - January 2023",
          location: "Shanghai Jiao Tong University, Shanghai",
          description:
            "Early research experience in physics and computational science. Worked on mathematical and physical equations, developing strong analytical skills and research methodologies. This experience sparked my interest in AI for Science.",
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
