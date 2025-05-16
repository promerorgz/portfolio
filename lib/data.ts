export const data = {
  name: "Pablo Romero",
  phone: "3147240839",
  email: "parom271@gmail.com",
  location: "Tampa Bay, FL",
  linkedin: "https://www.linkedin.com/in/pabromero/",
  about:
    "Experienced Sr. Full Stack Engineer with a strong background in cloud technologies, specializing in building scalable and efficient web applications. Demonstrated expertise in both front-end and back-end development, with particular strengths in Node.js, React, AWS, and Azure. Passionate about delivering high-quality code and mentoring fellow developers. Skilled in leading cross-functional teams and implementing innovative solutions across various industries including healthcare, retail, and agriculture.",
  experience: [
    {
      title: "Sr. Cloud Engineer",
      company: "SSM Health",
      location: "St. Louis, MO (Remote)",
      period: "Nov. 2023 - July 2024",
      description:
        "Led development of Node.js APIs and serverless applications using Azure Functions and Cosmos DB. Created Next.js dashboards with TypeScript, implemented Azure AD authentication, and optimized database performance. Established CI/CD pipelines and led cross-functional teams in planning and implementation.",
      highlights: [
        "Developed TypeScript APIs for CRUD operations and authentication systems",
        "Created serverless applications using Node.js and Azure Cosmos DB",
        "Built Next.js dashboard UI with TypeScript for marketing teams",
        "Implemented Azure AD (Entra) authentication for enhanced security",
        "Configured and optimized Cosmos DB with indexing strategies",
        "Established CI/CD pipelines using Azure DevOps",
      ],
    },
    {
      title: "Sr. Full Stack Engineer",
      company: "Nike",
      location: "Beaverton, OR (Remote)",
      period: "Feb. 2022 - Aug. 2023",
      description:
        "Developed platform-wide CMS using Node.js with TypeScript. Built serverless REST and GraphQL APIs using Apollo and Prisma. Created consumer-facing applications with Next.js and implemented role-based security. Deployed microservices on AWS ECS and Lambda.",
      highlights: [
        "Developed APIs for platform-wide CMS using Node.js with TypeScript",
        "Built serverless REST and GraphQL APIs with Apollo and Prisma",
        "Created consumer-facing applications using Next.js with mobile-first design",
        "Revived department-wide framework to streamline development",
        "Implemented role-based security through Nike Profile APIs",
        "Deployed microservices on AWS ECS, Lambda, and DynamoDB",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Bayer Crop Science",
      location: "St. Louis, MO",
      period: "Nov. 2019 - Feb. 2022",
      description:
        "Developed micro-frontends for modular, scalable applications. Created and refactored React components with Redux and Recoil for state management. Designed PostgreSQL database schemas and utilized AWS services for deployment. Led new projects from discovery to POC.",
      highlights: [
        "Developed micro-frontends for financial dashboard applications",
        "Created data visualization components using Chart.js",
        "Designed PostgreSQL database schemas with complex logic",
        "Led projects from discovery to POC, gathering requirements and designing architecture",
        "Built GraphQL APIs using Apollo Server and Prisma ORM",
        "Utilized AWS Lambda, Node, CodeBuild, and Fargate for DevOps",
      ],
    },
    {
      title: "Associate Technical Consultant",
      company: "Perficient",
      location: "St. Louis, MO",
      period: "Jan. 2019 - Nov. 2019",
      description:
        "Designed and co-created training programs for junior React developers. Instructed cohorts on React and Spring Boot. Developed Perficient Staffing Application and created reusable components for custom forms-building applications.",
      highlights: [
        "Designed comprehensive training program for junior React developers",
        "Instructed two cohorts of six junior developers on React and Spring Boot",
        "Developed Perficient Staffing Application as a training and project management tool",
        "Created reusable components for custom forms-building applications",
        "Worked with React TypeScript, Java Spring, Node.js, and GraphQL gateway APIs",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Systems",
      institution: "University of Missouri St Louis",
      location: "St. Louis, MO",
      year: "2018",
    },
  ],
  skills: [
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "TypeScript",
        "Java (Spring Boot)",
        "Express",
        "GraphQL",
        "Apollo",
        "Prisma",
        "Python",
        "REST APIs",
      ],
    },
    {
      category: "Frontend Development",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "GraphQL",
        "Webpack",
        "Styled Components",
      ],
    },
    {
      category: "Database",
      technologies: [
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "DynamoDB",
        "Azure Cosmos DB",
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        "AWS (Lambda, EC2, S3, DynamoDB, CloudWatch)",
        "Azure (Functions, Pipelines, Cosmos DB)",
        "Docker",
        "CI/CD",
        "Git",
        "Postman",
        "Jenkins",
        "Heroku",
        "Vercel",
      ],
    },
  ],
  projects: [],
};

export const getSelfData = () => {
  return data;
};
