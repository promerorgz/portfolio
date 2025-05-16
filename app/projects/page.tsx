'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    slug: 'e-commerce-platform',
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
  },
  {
    slug: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'A responsive portfolio website using Next.js and Tailwind CSS',
  },
  {
    slug: 'task-management-app',
    name: 'Task Management App',
    description: 'A React Native mobile app for managing daily tasks and productivity',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="featured">Featured Projects</TabsTrigger>
          <TabsTrigger value="github">GitHub Repositories</TabsTrigger>
        </TabsList>

        <TabsContent value="featured">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <Link href={`/projects/${project.slug}`} passHref>
                      <Button variant="outline" className="w-full justify-center group">
                        View Case Study
                        <motion.span
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="github">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
