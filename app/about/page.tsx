"use client";

import Image from "next/image";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { Server, Code, Database, Cloud } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="lg:grid lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-8">
              About{" "}
              <span className="text-indigo-600 dark:text-indigo-400">Me</span>
            </h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {data.about}
            </motion.p>

            <motion.div variants={item} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Background
              </h2>
              <div className="space-y-6">
                {data.experience.slice(0, 2).map((job, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.title} · {job.company}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {job.period} | {job.location}
                    </p>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {data.education[0].degree}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {data.education[0].institution} | {data.education[0].location}{" "}
                  | Graduated {data.education[0].year}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-12 lg:mt-0 space-y-10">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid [mask-image:radial-gradient(white,transparent_70%)]"></div>
              <Image
                className="rounded-xl shadow-lg"
                src="/hero_pic.jpg"
                alt={data.name}
                width={800}
                height={600}
                objectFit="cover"
              />
            </div>

            <motion.div variants={item} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={item}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Server className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Backend Development
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {data.skills[0].technologies.slice(0, 5).map((tech, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={item}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Frontend Development
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {data.skills[1].technologies.slice(0, 5).map((tech, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={item}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Database
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {data.skills[2].technologies.slice(0, 5).map((tech, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={item}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Cloud className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cloud & DevOps
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {data.skills[3].technologies.slice(0, 5).map((tech, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "I'm passionate about building clean, performant applications
                  that solve real-world problems. With experience across
                  multiple industries, I've developed a versatile approach to
                  software engineering focused on delivering high-quality
                  solutions."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
