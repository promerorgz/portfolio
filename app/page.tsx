"use client";

import FeaturedProjects from "@/components/FeaturedProjects";
import SkillSection from "@/components/SkillSection";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { data } from "@/lib/data";
import {
  ArrowRight,
  MessageCircle,
  Code,
  Github,
  ExternalLink,
  Cpu,
  Server,
  Download,
  Database,
  Cloud,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  // Theme-specific styling for hero section
  const getHeroStyles = () => {
    switch (theme) {
      case "cyberpunk":
        return {
          bg: "bg-gradient-to-b from-purple-900/50 to-black",
          accent: "text-fuchsia-500",
          activeBorder: "bg-fuchsia-500",
          button: "bg-fuchsia-600 hover:bg-fuchsia-700",
          socialBorder: "border-fuchsia-500",
          socialHover: "hover:bg-fuchsia-500",
          terminalText: "text-green-400",
          additionalClasses: "cyberpunk grid-effect",
          profileBorder: "border-fuchsia-500",
        };
      case "fc25":
        return {
          bg: "bg-gradient-to-b from-amber-900/30 to-gray-900",
          accent: "text-amber-500",
          activeBorder: "bg-amber-500",
          button: "bg-amber-600 hover:bg-amber-700",
          socialBorder: "border-amber-500",
          socialHover: "hover:bg-amber-500",
          terminalText: "text-amber-400",
          additionalClasses: "fc25 retro-texture",
          profileBorder: "border-amber-500",
        };
      case "beach":
        return {
          bg: "bg-gradient-to-b from-sky-100 to-blue-100 dark:from-sky-800 dark:to-cyan-900",
          accent: "text-cyan-600 dark:text-cyan-400",
          activeBorder: "bg-cyan-600",
          button: "bg-cyan-600 hover:bg-cyan-700",
          socialBorder: "border-cyan-500",
          socialHover: "hover:bg-cyan-500",
          terminalText: "text-sky-500",
          additionalClasses: "beach water-pattern",
          profileBorder: "border-cyan-500",
        };
      case "light":
        return {
          bg: "bg-gradient-to-b from-white to-gray-50",
          accent: "text-indigo-600",
          activeBorder: "bg-indigo-600",
          button: "bg-indigo-600 hover:bg-indigo-700",
          socialBorder: "border-indigo-600",
          socialHover: "hover:bg-indigo-600",
          terminalText: "text-indigo-600",
          additionalClasses: "",
          profileBorder: "border-indigo-600",
        };
      case "dark":
      default:
        return {
          bg: "bg-gradient-to-b from-gray-900 to-black",
          accent: "text-indigo-500",
          activeBorder: "bg-indigo-500",
          button: "bg-indigo-600 hover:bg-indigo-700",
          socialBorder: "border-indigo-500",
          socialHover: "hover:bg-indigo-500",
          terminalText: "text-indigo-500",
          additionalClasses: "",
          profileBorder: "border-indigo-500",
        };
    }
  };

  const heroStyles = getHeroStyles() || {
    bg: "bg-gradient-to-b from-gray-900 to-black",
    accent: "text-indigo-500",
    activeBorder: "bg-indigo-500",
    button: "bg-indigo-600 hover:bg-indigo-700",
    socialBorder: "border-indigo-500",
    socialHover: "hover:bg-indigo-500",
    terminalText: "text-indigo-500",
    additionalClasses: "",
    profileBorder: "border-indigo-500",
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
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    { value: "5+", label: "Years of experience" },
    { value: "20+", label: "Projects completed" },
    { value: "15+", label: "Technologies mastered" },
    { value: "10+", label: "Projects deployed" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden pt-32 lg:pt-36 pb-16 ${heroStyles.bg} ${heroStyles.additionalClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            staticity={20}
            color={`hsl(var(--primary))`}
            refresh
          />
        </div>
        {theme === "light" ? (
          <div className="absolute inset-0 bg-grid-black-100/[0.02]"></div>
        ) : (
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        )}
        {theme !== "light" && (
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
          >
            <motion.div
              variants={fadeIn}
              className="text-center xl:text-left order-2 xl:order-none"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-foreground mb-4 inline-block"
              >
                <Terminal className="mr-1 h-4 w-4" />
                Full Stack Developer
              </motion.span>

              <motion.h1
                variants={fadeIn}
                className="h1 mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
              >
                Hello I'm <br />
                <span className={heroStyles.accent}>{data.name}</span>
              </motion.h1>

              <motion.div variants={fadeIn} className="my-6">
                <div className="flex items-center sm:justify-center lg:justify-start">
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-500 text-2xl md:text-3xl font-bold`}
                  >
                    npm install success
                  </span>
                  <span
                    className={`${heroStyles.terminalText} ml-2 animate-pulse text-xl`}
                  >
                    _
                  </span>
                </div>
                <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  I craft modern, responsive web applications with a focus on
                  clean code, performance, and user experience. Let's turn your
                  ideas into elegant solutions.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <Link href="/resume" passHref>
                  <Button
                    className={`${heroStyles.button} text-white px-6 py-3 rounded-md flex items-center gap-2`}
                  >
                    <Download className="h-5 w-5" />
                    Download CV
                  </Button>
                </Link>

                <div className="flex gap-6 mb-8 xl:mb-0">
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 ${heroStyles.socialBorder} rounded-full flex justify-center items-center ${heroStyles.accent} ${heroStyles.socialHover} hover:text-white transition-all duration-500`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 ${heroStyles.socialBorder} rounded-full flex justify-center items-center ${heroStyles.accent} ${heroStyles.socialHover} hover:text-white transition-all duration-500`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 ${heroStyles.socialBorder} rounded-full flex justify-center items-center ${heroStyles.accent} ${heroStyles.socialHover} hover:text-white transition-all duration-500`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="order-1 xl:order-none mb-8 xl:mb-0"
            >
              <div className="relative">
                <div
                  className={`relative overflow-hidden rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 ${heroStyles.profileBorder}`}
                >
                  <Image
                    src="/hero_pic.jpg"
                    alt={data.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold ${heroStyles.accent} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Profile
            </h2>
            <div
              className={`mt-2 h-1 w-20 ${
                heroStyles.activeBorder ||
                heroStyles.accent.replace("text-", "bg-")
              } mx-auto`}
            ></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                About Me
              </h3>
              <p className="text-muted-foreground mb-4">{data.about}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span
                      className={`${heroStyles.accent} text-sm font-medium mr-2`}
                    >
                      Name:
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {data.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`${heroStyles.accent} text-sm font-medium mr-2`}
                    >
                      Location:
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {data.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span
                      className={`${heroStyles.accent} text-sm font-medium mr-2`}
                    >
                      Email:
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {data.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`${heroStyles.accent} text-sm font-medium mr-2`}
                    >
                      Professional:
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Sr. Full Stack Engineer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Technical Expertise
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Backend Development
                    </span>
                    <span
                      className={`text-sm font-medium ${heroStyles.accent}`}
                    >
                      95%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className={`h-2 ${
                        heroStyles.activeBorder ||
                        heroStyles.accent.replace("text-", "bg-")
                      } rounded-full`}
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Frontend Development
                    </span>
                    <span
                      className={`text-sm font-medium ${heroStyles.accent}`}
                    >
                      90%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className={`h-2 ${
                        heroStyles.activeBorder ||
                        heroStyles.accent.replace("text-", "bg-")
                      } rounded-full`}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Database Management
                    </span>
                    <span
                      className={`text-sm font-medium ${heroStyles.accent}`}
                    >
                      85%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className={`h-2 ${
                        heroStyles.activeBorder ||
                        heroStyles.accent.replace("text-", "bg-")
                      } rounded-full`}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      Cloud & DevOps
                    </span>
                    <span
                      className={`text-sm font-medium ${heroStyles.accent}`}
                    >
                      80%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className={`h-2 ${
                        heroStyles.activeBorder ||
                        heroStyles.accent.replace("text-", "bg-")
                      } rounded-full`}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              My Experience
            </h2>
            <div
              className={`mt-2 h-1 w-20 ${heroStyles.activeBorder} mx-auto`}
            ></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${heroStyles.activeBorder}`}
            ></div>

            <div className="space-y-16">
              {data.experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${heroStyles.activeBorder} z-10`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "pl-8"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${heroStyles.activeBorder}/20 ${heroStyles.accent} mb-2`}
                      >
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {job.title}
                      </h3>
                      <h4 className={`${heroStyles.accent} mb-3`}>
                        {job.company}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SkillSection />

      <FeaturedProjects />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to take your
              <span className={heroStyles.accent}> digital presence </span>
              to the next level?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              What led you here? What are you looking for? I would love to hear
              from you over a virtual coffee chat!
            </p>
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className={`${heroStyles.button} text-white px-8 py-3 rounded-md text-lg`}
              >
                Let's get in touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
