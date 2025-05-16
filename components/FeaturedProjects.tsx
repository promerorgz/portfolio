"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const featuredProjects = [
  {
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and MongoDB with payment integration.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive portfolio website using Next.js and Tailwind CSS with dark mode and animations.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    name: "Task Management App",
    description:
      "A React Native mobile app for managing daily tasks with authentication and cloud sync.",
    image: "/projects/taskapp.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function FeaturedProjects() {
  const { theme } = useTheme();

  // Theme-specific styling
  const getProjectStyles = () => {
    switch (theme) {
      case "cyberpunk":
        return {
          accent: "text-fuchsia-500",
          accentHover: "hover:text-fuchsia-400",
          border: "border-fuchsia-500/20",
          activeBorder: "bg-fuchsia-500",
          hoverEffect:
            "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/10",
          overlay: "bg-fuchsia-500/20",
          pillBg: "bg-fuchsia-500/10",
          pillBorder: "border-fuchsia-500/20",
          pillText: "text-fuchsia-300",
          button: "bg-fuchsia-600 hover:bg-fuchsia-700",
        };
      case "fc25":
        return {
          accent: "text-amber-500",
          accentHover: "hover:text-amber-400",
          border: "border-amber-500/20",
          activeBorder: "bg-amber-500",
          hoverEffect: "hover:border-amber-500/50 hover:shadow-amber-500/10",
          overlay: "bg-amber-500/20",
          pillBg: "bg-amber-500/10",
          pillBorder: "border-amber-500/20",
          pillText: "text-amber-300",
          button: "bg-amber-600 hover:bg-amber-700",
        };
      case "beach":
        return {
          accent: "text-cyan-600 dark:text-cyan-400",
          accentHover: "hover:text-cyan-500",
          border: "border-cyan-500/20",
          activeBorder: "bg-cyan-600",
          hoverEffect: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
          overlay: "bg-cyan-500/20",
          pillBg: "bg-cyan-500/10",
          pillBorder: "border-cyan-500/20",
          pillText: "text-cyan-600 dark:text-cyan-300",
          button: "bg-cyan-600 hover:bg-cyan-700",
        };
      case "light":
        return {
          accent: "text-indigo-600",
          accentHover: "hover:text-indigo-500",
          border: "border-indigo-600/20",
          activeBorder: "bg-indigo-600",
          hoverEffect: "hover:border-indigo-600/50 hover:shadow-indigo-600/10",
          overlay: "bg-indigo-600/10",
          pillBg: "bg-indigo-500/10",
          pillBorder: "border-indigo-500/20",
          pillText: "text-indigo-600",
          button: "bg-indigo-600 hover:bg-indigo-700",
        };
      case "dark":
      default:
        return {
          accent: "text-indigo-500",
          accentHover: "hover:text-indigo-400",
          border: "border-indigo-500/20",
          activeBorder: "bg-indigo-500",
          hoverEffect: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
          overlay: "bg-indigo-500/20",
          pillBg: "bg-indigo-500/10",
          pillBorder: "border-indigo-500/20",
          pillText: "text-indigo-300",
          button: "bg-indigo-600 hover:bg-indigo-700",
        };
    }
  };

  const styles = getProjectStyles() || {
    accent: "text-indigo-500",
    accentHover: "hover:text-indigo-400",
    border: "border-indigo-500/20",
    activeBorder: "bg-indigo-500",
    hoverEffect: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    overlay: "bg-indigo-500/20",
    pillBg: "bg-indigo-500/10",
    pillBorder: "border-indigo-500/20",
    pillText: "text-indigo-300",
    button: "bg-indigo-600 hover:bg-indigo-700",
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            A small selection of recent projects
          </motion.h2>
          <div className={`mt-2 h-1 w-20 ${styles.activeBorder} mx-auto`}></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeIn}
              className={`bg-card rounded-xl overflow-hidden border ${
                theme === "light" ? "border-gray-200" : "border-gray-700"
              } ${styles.hoverEffect} transition-all duration-300`}
            >
              <div className="relative h-48 w-full">
                <div
                  className={`absolute inset-0 ${styles.overlay} z-10`}
                ></div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${styles.pillBg} ${styles.pillText} ${styles.pillBorder}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm text-foreground ${styles.accentHover} transition-colors`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm text-foreground ${styles.accentHover} transition-colors`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects" passHref>
            <Button
              className={`${styles.button} text-white px-6 py-3 rounded-md`}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
