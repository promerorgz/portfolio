type JobT = {
  company: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string | string[];
  techStack: TechT[];
  city: string;
  title: string;
  logo: string;
};

type TechT = {
  name: string;
  logo: string;
  type: "front" | "back" | "db" | "cloud" | "devops" | "misc";
};

type EducationT = {
  school: string;
  degree: string;
  graduation: string;
  city: string;
};

export type Resume = {
  email: string;
  location: string;
  websites: string[];
  skills: TechT[];
  experience: JobT[];
  education: EducationT[];
};

const resume: Resume = {
  email: "parom271@gmail.com",
  location: "St. Petersburg, FL",
  websites: [
    "promero.dev",
    "linkedin.com/in/pabromero",
    "github.com/promerorgz",
  ],
  skills: [
    { name: "nodedotjs", logo: "", type: "back" },
    { name: "REST APIs", type: "back", logo: "" },
    { name: "Typescript", type: "back", logo: "typescript" },
    { name: "Java (Spring Boot)", type: "back", logo: "springboot" },
    { name: "Express", type: "back", logo: "express" },
    { name: "GraphQL", type: "back", logo: "graphql" },
    { name: "Apollo", type: "back", logo: "apollo" },
    { name: "Prisma", type: "back", logo: "prisma" },
    { name: "Python", type: "back", logo: "python" },
    { name: "JavaScript", logo: "javascript", type: "front" },
    { name: "TypeScript", logo: "typescript", type: "front" },
    { name: "React", logo: "react", type: "front" },
    { name: "NextJS", logo: "nextjs", type: "front" },
    { name: "GraphQL", logo: "graphql", type: "front" },
    { name: "React_Native", logo: "react", type: "front" },
    { name: "Redux", logo: "redux", type: "front" },
    { name: "Webpack", logo: "webpack", type: "front" },
    { name: "SQL", type: "db", logo: "sql" },
    { name: "MongoDB", type: "db", logo: "mongodb" },
    { name: "PostgreSQL", type: "db", logo: "postgresql" },
    { name: "Firebase", type: "db", logo: "firebase" },
    { name: "DynamoDB", type: "db", logo: "amazondynamodb" },
    { name: "CosmosDB", type: "db", logo: "cosmosdb" },
    { name: "Lambdas", logo: "awslambda", type: "cloud" },
    { name: "EC2", logo: "amazonec2", type: "cloud" },
    { name: "S3", logo: "amazons3", type: "cloud" },
    { name: "DynamoDB", logo: "amazondynamodb", type: "cloud" },
    { name: "Docker", logo: "docker", type: "cloud" },
    { name: "Azure_Pipelines", logo: "", type: "cloud" },
    { name: "Azure_Functions", logo: "", type: "cloud" },
    { name: "Docker", logo: "docker", type: "devops" },
    { name: "Git", logo: "git", type: "devops" },
    { name: "Postman", logo: "postman", type: "devops" },
    { name: "Jenkins", logo: "jenkins", type: "devops" },
    { name: "Heroku", logo: "heroku", type: "devops" },
    { name: "Vercel", logo: "vercel", type: "devops" },
    { name: "Terraform", logo: "terraform", type: "misc" },
  ],
  experience: [
    {
      logo: "",
      company: "SSM Health",
      title: "Sr. Cloud Engineer",
      city: "St. Louis, MO",
      startDate: "11/2023",
      endDate: "7/2024",
      description: `Developed APIs in Node.js with TypeScript, building them from scratch for a wide range of applications, primarily focused on CRUD functionalities and authentication for login systems.
Created a backend serverless application using Node.js and Cosmos DB, ensuring rapid and reliable data processing; focused on maintaining seamless integration and interaction between various components.
Designed and deployed serverless APIs using Azure Functions, improving scalability and reducing infrastructure management overhead.
Created a Next.js dashboard UI for marketing teams, enhancing data management efficiency and facilitating non-technical team interactions while leveraging TypeScript for enhanced code reliability.
Integrated Microsoft Azure AD authentication, improving application security and access control.
Optimized Cosmos DB with indexing strategies, ensuring efficient NoSQL storage and rapid data retrieval.
Automated deployment pipelines with Azure DevOps, improving application reliability and maintainability.
Implemented authentication using Azure AD (Entra) to enhance security and access control for the UI. 
Configured and managed a Cosmos database for NoSQL storage of provider data, enabling efficient CRUD operations from the UI. 
Created Azure Functions to perform bulk data loading into the database and to update documents with new data from the data lake, enhancing data processing capabilities. 
Established CI/CD pipelines using Azure Pipelines, automating the deployment process and ensuring reliable software delivery. 
Collaborated closely with cross-functional teams on planning, design, and implementation of various features and functionalities.
Developed a backend serverless application using Node.js and Cosmos DB, ensuring rapid and reliable data processing; focused on maintaining seamless integration and interaction between various components. 
Led cross-functional teams in planning, designing, and implementing features, ensuring timely project completion while focusing on both front-end and back-end development.
`,
      techStack: [
        { name: "Node.js", logo: "", type: "back" },
        { name: "Typescript", type: "back", logo: "" },
        { name: "JavaScript", logo: "", type: "front" },
        { name: "React", logo: "", type: "front" },
        { name: "CosmosDB", type: "db", logo: "" },
        { name: "Azure_Pipelines", logo: "", type: "cloud" },
        { name: "Azure_Functions", logo: "", type: "cloud" },
        { name: "Terraform", logo: "", type: "misc" },
      ],
      current: false,
    },
    {
      logo: "",
      company: "Nike",
      title: "Sr. Full Stack Engineer",
      startDate: "2/2022",
      endDate: "8/2023",
      city: "Beaverton, OR (Remote)",
      description: `Developed APIs and features for a platform-wide CMS using Node.js with TypeScript, enhancing content and user management in the admin console web application.
Built and maintained serverless REST APIs and GraphQL APIs for the innovation app using Apollo and Prisma, optimizing for performance and scalability
Built and scaled various back-end services using Node.js and TypeScript, ensuring seamless front-end operations. Designed RESTful APIs for efficient data exchange on a Node Express server
Ensured security of services by implementing role based access as well as permission based access through Nike Profile APIs
Created new features and user interfaces using NextJS and React, ensuring a seamless and responsive user experience.
Developed a consumer-facing version of Nike’s Innovation application using Next.js and TypeScript, ensuring a smooth user experience on both mobile and desktop. Applied a mobile-first design approach, optimizing for performance, accessibility, and responsive layouts.
Revived and enhanced a department-wide framework to streamline the development of new initiatives, enabling teams to bootstrap applications seamlessly within the Nike ecosystem. The framework ensured compatibility with required dependencies and provided pre-configured, out-of-the-box features, accelerating project onboarding and maintaining alignment with organizational standards.
Contributed to overall app development with a strong focus on maintaining high standards of quality and functionality.
Offering technical guidance and mentorship to peers, fostering a collaborative work environment.
Deployed microservices on AWS ECS, Lambdas, and DynamoDB, ensuring efficient service operation and scalability.
Implemented new features and user interfaces on the web front end using technologies such as NextJs, React, Redux Toolkit and styled-components.
Ownership of the project's admin console web application to include new API's and features to facilitate the management of initiatives and their respective meta. 
Built CMS feature to create and update initiatives and content that would show up in the web frontend application, according to the right audiences. 
Build and scale back-end services, ensuring seamless operation across mobile and web front ends.\n
Participate in architecture discussions with Product Designers, Product Managers, and Software Engineers to deliver user-facing products and design APIs for future releases.
`,
      techStack: [
        { name: "Node.js", logo: "", type: "back" },
        { name: "REST APIs", type: "back", logo: "" },
        { name: "Typescript", type: "back", logo: "" },
        { name: "Express", type: "back", logo: "" },
        { name: "GraphQL", type: "back", logo: "" },
        { name: "Apollo", type: "back", logo: "" },
        { name: "Prisma", type: "back", logo: "" },
        { name: "JavaScript", logo: "", type: "front" },
        { name: "React", logo: "", type: "front" },
        { name: "NextJS", logo: "", type: "front" },
        { name: "Redux", logo: "", type: "front" },
        { name: "DynamoDB", type: "db", logo: "" },
        { name: "Lambdas", logo: "", type: "cloud" },
        { name: "EC2", logo: "", type: "cloud" },
        { name: "S3", logo: "", type: "cloud" },
        { name: "CI/CD", logo: "", type: "devops" },
        { name: "Postman", logo: "", type: "devops" },
        { name: "Jenkins", logo: "", type: "devops" },
      ],
    },
    {
      logo: "",
      company: "Bayer Crop Science",
      title: "Full Stack Developer",
      startDate: "11/2019",
      endDate: "2/2022",
      city: "St. Louis, MO",
      techStack: [
        { name: "Python", type: "back", logo: "" },
        { name: "Node.js", logo: "", type: "back" },
        { name: "REST APIs", type: "back", logo: "" },
        { name: "Typescript", type: "back", logo: "" },
        { name: "Express", type: "back", logo: "" },
        { name: "GraphQL", type: "back", logo: "" },
        { name: "Apollo", type: "back", logo: "" },
        { name: "Prisma", type: "back", logo: "" },
        { name: "JavaScript", logo: "", type: "front" },
        { name: "React", logo: "", type: "front" },
        { name: "NextJS", logo: "", type: "front" },
        { name: "Redux", logo: "", type: "front" },
        { name: "DynamoDB", type: "db", logo: "" },
        { name: "Lambdas", logo: "", type: "cloud" },
        { name: "EC2", logo: "", type: "cloud" },
        { name: "S3", logo: "", type: "cloud" },
        { name: "CI/CD", logo: "", type: "devops" },
        { name: "Postman", logo: "", type: "devops" },
        { name: "Jenkins", logo: "", type: "devops" },
        { name: "Webpack", logo: "", type: "front" },
      ],
      description: `Collaboratively designed and co-created a comprehensive training program tailored for nurturing homegrown junior React developers. This initiative aimed to bolster the React competency within the organization while fostering the growth of emerging talent. 
Assumed the role of instructor for a specialized training program at Perficient, imparting in-depth knowledge of React and Spring Boot to two successive cohorts, each comprising six junior hires. This strategic effort contributed significantly to the establishment and consolidation of a React-focused initiative within Perficient. 
Played an instrumental role in the development of the Perficient Staffing Application, a pivotal tool that now serves as both a training resource for new hires seeking to master React and a project management platform for tracking ongoing ventures within the organization. 
Functioned as a seasoned consultant, bringing technical acumen and proficiency to bear on client-facing applications as well as internal systems. This encompassed the creation, maintenance, and optimization of codebases for diverse applications. 
Create reusable components that served as insertable fields within a custom forms-building application utilized by a prominent school communications company. This innovation streamlined the form creation process and enhanced user efficiency.
Designed and co-created a comprehensive training program for junior React developers, equipping incoming junior consultants with the skills needed to excel in client engagements. 
The development stack was React Typescript for the frontend, a Java Spring micro-service, a Typescript Node micro-service, and a GraphQL gateway API.
Delivered hands-on instruction and mentorship, fostering a deep understanding of React and best practices in front-end development. 
This initiative not only enhanced the technical capabilities of participants but also significantly increased the pool of qualified React developers available for client projects, contributing to the organization's growth and client satisfaction. 
Provided expert technical consulting for both client-facing applications and internal systems, delivering tailored solutions that addressed specific business needs and technical challenges. 
Played a key role in optimizing internal systems, leading to improved operational efficiency and streamlined workflows. 
My contributions resulted in higher client satisfaction and the successful deployment of robust, scalable solutions.
`,
    },
  ],
  education: [
    {
      school: "University of Missouri St. Louis",
      degree: "Bachelor of Science in Information Systems",
      graduation: "2018",
      city: "St. Louis",
    },
  ],
};

const skillsByType = resume.skills.reduce((acc, skill) => {
  const organizedSkills = resume.skills.filter((j) => skill.type === j.type);
  console.log({ organizedSkills });
  return {
    ...acc,
    [skill.type]: organizedSkills,
  };
}, {});

export default {
  experience: resume.experience,
  skills: resume.skills,
  education: resume.education,
};
