export type Language = "en" | "zh";

export type LocalizedString = Record<Language, string>;

export type LinkKind = "github" | "linkedin" | "email" | "resume" | "demo" | "paper" | "project";

export type ProjectStatus = "completed" | "ongoing" | "research" | "archived";

export interface ExternalLink {
  kind: LinkKind;
  label: LocalizedString;
  href: string;
  placeholder?: boolean;
}

export interface Project {
  id: string;
  title: LocalizedString;
  image: string;
  description?: LocalizedString;
  tags: string[];
  status: ProjectStatus;
  links: ExternalLink[];
}

export interface Internship {
  id: string;
  company: string;
  logo: string;
  role: LocalizedString;
  date: LocalizedString;
  location: LocalizedString;
  description?: LocalizedString;
  contributions: LocalizedString[];
  tags: string[];
}

export interface LifeItem {
  id: string;
  title: LocalizedString;
  date: string;
  image: string;
  description?: LocalizedString;
  tags: string[];
  galleryGroups?: Array<{
    id: string;
    title: LocalizedString;
    description?: LocalizedString;
    images: Array<{
      src: string;
      alt: LocalizedString;
      featured?: boolean;
    }>;
    subgroups?: Array<{
      id: string;
      title: LocalizedString;
      description?: LocalizedString;
      images: Array<{
        src: string;
        alt: LocalizedString;
        featured?: boolean;
      }>;
    }>;
  }>;
}

export interface Profile {
  site: {
    githubPages: {
      username: string;
      repoName: string;
    };
    sourceFile: string;
  };
  ui: {
    languageNames: Record<Language, string>;
    nav: Array<{
      path: string;
      label: LocalizedString;
    }>;
    pages: Record<"home" | "projects" | "internships" | "life", LocalizedString>;
    sections: Record<"quickLinks" | "keywords" | "selectedWork" | "timeline" | "photoJournal", LocalizedString>;
    facts: Record<"hobbies", LocalizedString>;
    projectStatus: Record<ProjectStatus, LocalizedString>;
    missing: LocalizedString;
    menu: LocalizedString;
  };
  person: {
    name: string;
    englishName: string;
    displayName: LocalizedString;
    location: LocalizedString;
    email: string;
    github: string;
    linkedin: string;
    resumePdf: string;
    avatar: string;
    heroImage: string;
    education: Array<{
      label: LocalizedString;
      value: LocalizedString;
    }>;
    hobbies: LocalizedString;
    introduction: LocalizedString;
    keywords: LocalizedString[];
    quickLinks: ExternalLink[];
  };
  projects: Project[];
  internships: Internship[];
  life: LifeItem[];
}

const placeholder = {
  en: "Placeholder: update this field in src/data/profile.ts.",
  zh: "占位内容：请在 src/data/profile.ts 中更新此字段。",
};

const travelChinaImages = [
  "/assets/travel/CHINA/china-01.jpeg",
  "/assets/travel/CHINA/china-02.jpeg",
  "/assets/travel/CHINA/china-03.jpeg",
  "/assets/travel/CHINA/china-04.jpeg",
  "/assets/travel/CHINA/china-05.jpeg",
];

const travelHongKongImages = [
  "/assets/travel/CHINA/hongkong/hongkong-01.jpeg",
  "/assets/travel/CHINA/hongkong/hongkong-02.jpeg",
  "/assets/travel/CHINA/hongkong/hongkong-03.jpeg",
  "/assets/travel/CHINA/hongkong/hongkong-04.jpeg",
  "/assets/travel/CHINA/hongkong/hongkong-05.jpeg",
];

const travelMacauImages = [
  "/assets/travel/CHINA/macau/macau-01.jpeg",
  "/assets/travel/CHINA/macau/macau-02.jpeg",
];

const travelKoreaImages = [
  "/assets/travel/korea/korea-01.jpeg",
  "/assets/travel/korea/korea-02.jpeg",
  "/assets/travel/korea/korea-03.jpeg",
];

const travelMalaysiaImages = [
  "/assets/travel/malaysia/malaysia-01.jpeg",
];

export const profile: Profile = {
  site: {
    githubPages: {
      username: "3270939387",
      repoName: "personal-portfolio",
    },
    sourceFile: "personal.txt",
  },
  ui: {
    languageNames: {
      en: "EN",
      zh: "中文",
    },
    nav: [
      { path: "/", label: { en: "Home", zh: "首页" } },
      { path: "/projects", label: { en: "Projects", zh: "项目" } },
      { path: "/internships", label: { en: "Internships", zh: "实习经历" } },
      { path: "/life", label: { en: "My Life", zh: "生活" } },
    ],
    pages: {
      home: { en: "Home", zh: "首页" },
      projects: { en: "Projects", zh: "项目" },
      internships: { en: "Internships", zh: "实习经历" },
      life: { en: "My Life", zh: "生活" },
    },
    sections: {
      quickLinks: { en: "Academic Background", zh: "学术背景" },
      keywords: { en: "Keywords", zh: "关键词" },
      selectedWork: { en: "Selected Work", zh: "代表项目" },
      timeline: { en: "Timeline", zh: "时间线" },
      photoJournal: { en: "Photo Journal", zh: "影像日记" },
    },
    facts: {
      hobbies: { en: "Hobbies", zh: "兴趣" },
    },
    projectStatus: {
      completed: { en: "Completed", zh: "已完成" },
      ongoing: { en: "Ongoing", zh: "进行中" },
      research: { en: "Research", zh: "研究" },
      archived: { en: "Archived", zh: "已归档" },
    },
    missing: placeholder,
    menu: { en: "Menu", zh: "菜单" },
  },
  person: {
    name: "CHANG XIAOYIN 常潇尹",
    englishName: "friday",
    displayName: {
      en: "CHANG XIAOYIN",
      zh: "常潇尹",
    },
    location: {
      en: "China",
      zh: "中国",
    },
    email: "e1520236@u.nus.edu",
    github: "https://github.com/3270939387",
    linkedin: "https://www.linkedin.com/in/xiaoyin-chang-3a545537a/",
    resumePdf: "/assets/resume-placeholder.pdf",
    avatar: "/assets/selfie.jpeg",
    heroImage: "/assets/heroimage.jpeg",
    education: [
      {
        label: { en: "Bachelor 2021/09-2025/07", zh: "本科      2021/09-2025/07" },
        value: { en: "Shenzhen University, Robotics", zh: "深圳大学，机器人方向" },
      },
      {
        label: { en: "Graduate 2025/08-2027/07", zh: "研究生      2025/08-2027/07" },
        value: { en: "National University of Singapore, Robotics", zh: "新加坡国立大学，机器人方向" },
      },
      {
        label: { en: "Exchange 2024/09-2025/01", zh: "交换经历      2024/09-2025/01" },
        value: { en: "The Hong Kong Polytechnic University", zh: "香港理工大学" },
      },
    ],
    hobbies: {
      en: "Dancing, singing, basketball, drum, piano, guitar",
      zh: "跳舞、唱歌、篮球、架子鼓、钢琴、吉他",
    },
    introduction: {
      en: "Hi, I'm Friday, a robotics student interested in embodied AI, including multimodality imitation learning and reinforcement learning for robot manipulation. ",
      zh: "你好，我是常潇尹，也可以叫我 Friday。我关注具身智能，包括多模态模仿学习和强化学习在机械臂操作中的应用",
    },
    keywords: [
      { en: "Robotics", zh: "机器人" },
      { en: "Embodied AI", zh: "具身智能" },
      { en: "Reinforcement Learning", zh: "强化学习" },
      { en: "Imitation Learning", zh: "模仿学习" },
      { en: "Robot Manipulation", zh: "机械臂操作" },
    ],
    quickLinks: [
      {
        kind: "github",
        label: { en: "GitHub", zh: "GitHub" },
        href: "https://github.com/3270939387",
      },
      {
        kind: "linkedin",
        label: { en: "LinkedIn", zh: "LinkedIn" },
        href: "https://www.linkedin.com/in/xiaoyin-chang-3a545537a/",
        placeholder: false,
      },
      {
        kind: "email",
        label: { en: "Email", zh: "邮箱" },
        href: "mailto:e1520236@u.nus.edu",
      },
      {
        kind: "resume",
        label: { en: "Resume PDF", zh: "简历 PDF" },
        href: "/assets/resume-placeholder.pdf",
        placeholder: true,
      },
    ],
  },
  projects: [
    {
      id: "adaptive compliance policy",
      title: {
        en: "Adaptive Compliance Diffusion-Based Policy training and deployment for force-related tasks",
        zh: "自适应柔顺扩散策略训练和部署，用于力相关任务",
      },
      image: "/assets/x2_opendoor.png",
      description: {
        en: "policy training with ACP strategy and successful deployment to complete force-related tasks such as opening doors and wiping vases. Multiple comparative experiments were conducted as follows: 1. Force modality ablation 2. Influence of wrist and global camera 3. Comparison of multimodal fusion methods (film vs. cross attention) 4. Variable stiffness admittance controller vs. position control",
        zh: "基于ACP策略训练并成功部署，完成开门、擦花瓶等力相关任务。进行多组对比实验如下：1. 力模态消融 2. 腕部与全局相机影响 3. 多模态融合方法（film v.s. cross attn）对比 4. 可变刚度导纳控制器与位置控制",
      },
      tags: ["Adaptive Compliance", "Multimodal Diffusion Policy", "admittance control"],
      status: "completed",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "#", placeholder: true },
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
    {
      id: "ppo-visual-grasping",
      title: {
        en: "PPO-Based Visual Grasping Policy Training and Real-Robot Deployment",
        zh: "基于PPO的视觉抓取策略训练以及真机部署",
      },
      image: "/assets/lerobot_sim2real.png",
      description: {
        en: "Training a visual grasping policy using the PPO algorithm in ManiSkill, replacing real-world backgrounds with simulated camera renderings to reduce the visual gap, and finally combining domain randomization for deployment on the LeRobot Soarm101.",
        zh: "在maniskill中采用PPO算法进行策略训练，将真实世界背景替换为仿真相机渲染结果以缩小visual gap，最后结合domain randomization并部署至lerobot soarm101",
      },
      tags: ["PPO", "ManiSkill", "LeRobot"],
      status: "completed",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/3270939387/lerobot-sim2real", placeholder: false },
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
    {
      id: "gello-fr3-pi05",
      title: {
        en: "FR3 Table-Cleaning Data Collection with GELLO and pi0.5 Fine-Tuning",
        zh: "基于gello遥操框架采集FR3桌面清理数据并微调pi0.5模型",
      },
      image: "/assets/fr3.jpeg",
      description: {
        en: "Collecting tabletop cleanup and simple organizing data with the GELLO teleoperation framework, then fine-tuning the pi0.5 model.",
        zh: "任务内容是清理桌面垃圾并进行简单收纳整理，项目基于gello框架能够更直接地采集数据，并对pi0.5模型进行微调。",
      },
      tags: ["GELLO", "FR3", "pi0.5", "Teleoperation"],
      status: "completed",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "#", placeholder: true },
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
    {
      id: "isaacsim-bc-dagger",
      title: {
        en: "Data-Driven BC + DAGGER Visual Policy Training in Isaac Sim",
        zh: "基于isaacsim训练data-driven的BC+DAGGER视觉驱动策略",
      },
      image: "/assets/isaacsim.png",
      description: {
        en: "generating high-quality simulation datasets with corner cases and key-frame loss weighting, then training imitation learning policies.",
        zh: "主要集中于如何在仿真环境中生成高质量数据集（数据基本质量：以episode长度、图片像素、δa等为评判标准去除低质量数据；数据多样性：增加corner case，融合DAGGER迭代得到的纠错数据等)",
      },
      tags: ["Isaac Sim","Data-Driven", "BC+DAGGER"],
      status: "completed",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/3270939387/ME5400_IL_LEFT", placeholder: false },
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
    {
      id: "isaaclab-needle-alignment",
      title: {
        en: "Parallel Training for Needle-Arm Alignment and Puncture Tasks in Isaac Lab",
        zh: "基于isaaclab训练带针机械臂在干扰环境下的针穿刺任务（还在进行中）",
      },
      image: "/assets/isaaclab.png",
      description: {
        en: "task content is to align a needle-arm robot with a dynamic target point and puncture a needle in a noisy environment",
        zh: "任务内容是要求带针机械臂能在干扰环境下如摩擦等外界阻力下成功到达动态目标点并完成针穿刺任务",
      },
      tags: ["Isaac Lab", "Simulation", "reinforcement learning"],
      status: "ongoing",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/3270939387/ME5400_RL_RIGHT", placeholder: false },
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
    {
      id: "me5413-autonomous-navigation",
      title: {
        en: "Autonomous Navigation, Perception, and Localization Pipeline",
        zh: "NUS ME5413 自主导航、感知与定位系统",
      },
      image: "/assets/me5413.png",
      description: {
        en: "The project integrates simulation, sensor fusion, HDL localization, FAST-LIO navigation, SLAM, and autonomous navigation in a two-floor building. The robot also performed recognition and counting tasks using EasyOCR.",
        zh: "项目包含仿真、传感器融合、HDL localization、FAST-LIO 导航、SLAM 与全局/局部定位组件。机器人在两层楼建筑中完成自主导航，并使用 EasyOCR 执行识别与计数任务。",
      },
      tags: ["FAST-LIO", "HDL Localization", "SLAM", "Autonomous Navigation"],
      status: "completed",
      links: [
        { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/3270939387/ME5413_Final_Project", placeholder: false},
        { kind: "demo", label: { en: "Demo", zh: "演示" }, href: "#", placeholder: true },
      ],
    },
  ],
  internships: [
    {
      id: "vivo-2026",
      company: "Vivo Robotics Lab",
      logo: "/assets/vivo.png",
      role: {
        en: "Assistant algorithm engineer intern focusing on robot manipulation and learning-based control.",
        zh: "助理算法工程师实习生，专注于机器人操作和基于学习的控制",
      },
      date: {
        en: "May 2026 - Present",
        zh: "2026.05 - 至今",
      },
      location: {
        en: "Shanghai, China",
        zh: "上海，中国",
      }, 
      contributions: [
        {
          en: "Built a VLA-learning-based control pipeline for robotic manipulation tasks, including multi-threads Lerobotv3.0 data collection, model training, and FR3 real-world deployment.",
          zh: "基于VLA学习的机器人操作控制系统开发，包括多线程 Lerobotv3.0 数据采集、模型训练和FR3真机部署",
        },
        {
          en: "Used manus metaglove pro to collect human hand motion data and retarget to sharpa wave hand for robotic manipulation imitation learning.",
          zh: "使用Manus MetaGlove Pro收集人类手部运动数据，并将其重定向到Sharpa Wave手部设备用于机器人操作模仿学习",
        },
      {
          en: "Explored how different data collection strategies like UMI, Teleoporation and EGO can work together to improve the performance of learning-based control in real-world robotic manipulation tasks.",
          zh: "探索了不同的数据收集策略（如UMI、Teleoporation和EGO）如何协同工作以提高真实世界机器人操作任务中基于学习的控制性能",
        },
      ],
      tags: ["Robotics", "Manus MetaGlove", "Lerobot", "FR3", "UMI"],
    },
        {
      id: "Alphatok-2025",
      company: "Alphatok",
      logo: "/assets/alphatok.png",
      role: {
        en: "robotics engineer intern focusing on robot system development and integration",
        zh: "机器人工程师实习生，专注于机器人系统开发和集成",
      },
      date: {
        en: "Sept 2025 - Jan 2026",
        zh: "2025.09 - 2026.01",
      },
      location: {
        en: "Singapore",
        zh: "新加坡",
      }, 
      contributions: [
        {
          en: "Co-developed the kinematics, servo and joint control pipeline for hiwonder robotic arm based on ROS2",
          zh: "基于ROS2协助开发Hiwonder机器人臂的运动学、伺服和关节控制流程",
        },
        {
          en: "Collabrated on hand-eye calibration and ik-based trajectory planning for robotic manipulation tasks",
          zh: "与团队合作进行手眼标定和基于逆运动学的轨迹规划，用于机器人操作任务",
        },
      ],
      tags: ["Robotics", "ROS2", "Camera Calibration"],
    },
            {
      id: "CET-2025",
      company: "深圳市中电电力技术股份有限公司",
      logo: "/assets/CET.png",
      role: {
        en: "AI engineer intern focusing on llm data generation",
        zh: "AI工程师实习生，专注于大语言模型数据生成",
      },
      date: {
        en: "Jan 2025 - May 2026",
        zh: "2025.01 - 2026.05",
      },
      location: {
        en: "Shenzhen, China",
        zh: "深圳，中国",
      }, 
      contributions: [
        {
          en: "Explored automated data generation techniques for LLM training, including prompt engineering, data augmentation, and quality evaluation.",
          zh: "探索了用于LLM训练的自动化数据生成技术，包括提示工程、数据增强和质量评估",
        },
        {
          en: "Collabrated on Bert-like model training for Q%A tasks.",
          zh: "与团队合作进行Bert-like模型训练，用于问答任务",
        },
      ],
      tags: ["prompt engineering", "data generation", "LLM"],
    },
  ],
  life: [
    {
      id: "dancing-moments",
      title: {
        en: "Dancing Moment",
        zh: "跳舞瞬间",
      },
      date: "From 2024",
      image: "/assets/dancing/xiaomei.jpeg",
      description: {
        en: "Don't forget to freestyle and Don't forget to make friends all the way",
        zh: "别忘了Freestyle，别忘了交朋友",
      },
      tags: ["Dance", "Freestyle", "Friends"],
      galleryGroups: [
        {
          id: "dance-floor",
          title: { en: "Dance Floor", zh: "舞蹈现场" },
          description: {
            en: "Freestyle, rehearsals, graduation moments, and friends met through dance.",
            zh: "Freestyle、排练、毕业瞬间，以及因为跳舞认识的朋友。",
          },
          images: [
            {
              src: "/assets/dancing/xiaomei.jpeg",
              alt: { en: "Dancing moment with Xiaomei", zh: "和小美有关的跳舞瞬间" },
              featured: true,
            },
            {
              src: "/assets/dancing/tlc.jpeg",
              alt: { en: "Dance moment at TLC", zh: "TLC 跳舞瞬间" },
            },
            {
              src: "/assets/dancing/graduation.jpeg",
              alt: { en: "Graduation dance memory", zh: "毕业舞蹈记忆" },
            },
            {
              src: "/assets/dancing/ddc.jpeg",
              alt: { en: "DDC dance moment", zh: "DDC 跳舞瞬间" },
            },
            {
              src: "/assets/dancing/Iloveddc.jpeg",
              alt: { en: "I love DDC moment", zh: "I love DDC 瞬间" },
            },
          ],
        },
      ],
    },
    {
      id: "travel-moments",
      title: {
        en: "Travel Moment",
        zh: "旅行瞬间",
      },
      date: "*",
      image: travelChinaImages[0],
      description: {
        en: "Travel always makes me learn hehe",
        zh: "旅行总是让我学到很多哈哈",
      },
      tags: ["Travel", "Photography", "City Walk"],
      galleryGroups: [
        {
          id: "china",
          title: { en: "China", zh: "中国" },
          description: {
            en: "city walks, quiet corners, and everyday scenery",
            zh: "城市漫步、安静角落和日常风景",
          },
          images: travelChinaImages.map((src, index) => ({
            src,
            alt: { en: `China travel moment ${index + 1}`, zh: `中国旅行瞬间 ${index + 1}` },
            featured: index === 0,
          })),
          subgroups: [
            {
              id: "hong-kong",
              title: { en: "Hong Kong, China", zh: "中国香港" },
              description: {
                en: "Dense streets, sea breeze, and layered city views.",
                zh: "密集街景、海风和层次丰富的城市视角。",
              },
              images: travelHongKongImages.map((src, index) => ({
                src,
                alt: { en: `Hong Kong travel moment ${index + 1}`, zh: `香港旅行瞬间 ${index + 1}` },
                featured: index === 0,
              })),
            },
            {
              id: "macau",
              title: { en: "Macau, China", zh: "中国澳门" },
              description: {
                en: "Short-trip fragments with warm streets and landmark details.",
                zh: "短途旅行片段，温暖街道和地标细节。",
              },
              images: travelMacauImages.map((src, index) => ({
                src,
                alt: { en: `Macau travel moment ${index + 1}`, zh: `澳门旅行瞬间 ${index + 1}` },
                featured: index === 0,
              })),
            },
          ],
        },
        {
          id: "korea",
          title: { en: "Korea", zh: "韩国" },
          description: {
            en: "Street snapshots and travel notes from Korea.",
            zh: "韩国旅行里的街头记录和途中片段。",
          },
          images: travelKoreaImages.map((src, index) => ({
            src,
            alt: { en: `Korea travel moment ${index + 1}`, zh: `韩国旅行瞬间 ${index + 1}` },
            featured: index === 0,
          })),
        },
        {
          id: "malaysia",
          title: { en: "Malaysia", zh: "马来西亚" },
          description: {
            en: "A warm tropical travel memory.",
            zh: "一段温暖的热带旅行记忆",
          },
          images: travelMalaysiaImages.map((src, index) => ({
            src,
            alt: { en: `Malaysia travel moment ${index + 1}`, zh: `马来西亚旅行瞬间 ${index + 1}` },
            featured: index === 0,
          })),
        },
      ],
    },
  ],
};
