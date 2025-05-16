"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import Link from "next/link";

const Resume = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Resume
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </motion.div>
        </div>

        {/* Personal Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {data.name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {data.location}
            </p>
            <div className="flex justify-center space-x-4 text-gray-600 dark:text-gray-300">
              <a
                href={`mailto:${data.email}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {data.email}
              </a>
              <span>•</span>
              <a
                href={`tel:${data.phone}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {data.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </a>
              <span>•</span>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {data.experience.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-6 relative"
              >
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-2 text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>

                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-6 relative"
          >
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {data.education[0].degree}
            </h3>
            <div className="flex flex-wrap gap-x-2 text-gray-600 dark:text-gray-300">
              <span className="font-medium">
                {data.education[0].institution}
              </span>
              <span>•</span>
              <span>{data.education[0].location}</span>
              <span>•</span>
              <span>Graduated {data.education[0].year}</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex items-center mb-8">
            <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Backend Development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills[0].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills[1].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Database
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills[2].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Cloud className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cloud & DevOps
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills[3].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
