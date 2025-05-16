'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// This would typically come from a database or API
const projects = [
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: 'https://placehold.co/600x400/png',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    caseStudy: `
      Our e-commerce platform project was born out of the need for a flexible, scalable solution for online businesses. 
      The challenge was to create a system that could handle a wide variety of products, manage user accounts, process 
      payments securely, and provide an intuitive interface for both customers and administrators.

      We chose React for the frontend due to its component-based architecture, which allowed us to create a modular 
      and easily maintainable user interface. The use of Redux for state management ensured that our application could 
      handle complex data flows efficiently.

      On the backend, we opted for Node.js and Express, which provided a fast and scalable server-side solution. 
      This choice also allowed us to use JavaScript throughout our stack, streamlining development and making it 
      easier for our team to work on both frontend and backend.

      MongoDB was selected as our database for its flexibility with different types of product data and its ability 
      to handle large amounts of information efficiently. We implemented advanced features such as real-time inventory 
      updates, personalized recommendations, and detailed analytics for store owners.

      One of the biggest challenges we faced was ensuring the security of user data and payment information. We 
      implemented industry-standard encryption methods and worked closely with payment gateway providers to ensure 
      that all transactions were secure and compliant with relevant regulations.

      The result was a highly performant, secure, and user-friendly e-commerce platform that has been successfully 
      adopted by numerous businesses, ranging from small boutique shops to large-scale online retailers. The modular 
      nature of our solution allows for easy customization, enabling businesses to tailor the platform to their 
      specific needs.

      This project not only showcased our technical skills but also our ability to understand and meet complex 
      business requirements in the ever-evolving world of e-commerce.
    `,
  },
  // Add more projects here...
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState({
    title: projects[0].title,
    description: projects[0].description,
    image: projects[0].image,
    techStack: projects[0].techStack,
    caseStudy: projects[0].caseStudy,
  });

  const { slug } = params;

  useEffect(() => {
    const project = projects.find(p => p.slug === slug);
    if (project) {
      setProject(project);
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block xl:inline">{project.title}</span>
                </motion.h1>
                <motion.p
                  className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </main>
          </div>
        </div>
        <motion.div
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge variant="secondary">{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Study
          </motion.h2>
          <motion.div
            className="prose dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.caseStudy.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
