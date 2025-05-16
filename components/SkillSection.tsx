'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check, Code, Layout, Server, Database, Cloud, Cpu, Layers } from 'lucide-react';
import { data } from '@/lib/data';
import { useTheme } from 'next-themes';

export default function SkillSection() {
  const { theme } = useTheme();

  // Create categorizedSkills object from data.skills
  const categorizedSkills: Record<string, string[]> = {};
  data.skills.forEach(skillCategory => {
    categorizedSkills[skillCategory.category] = skillCategory.technologies;
  });

  // Theme-specific styling
  const getThemeStyles = () => {
    switch (theme) {
      case 'cyberpunk':
        return {
          accent: 'text-fuchsia-500',
          border: 'border-fuchsia-500/20',
          activeBorder: 'bg-fuchsia-500',
          hoverEffect: 'hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/10',
          pillBg: 'bg-purple-500/10',
          pillText: 'text-fuchsia-300',
        };
      case 'fc25':
        return {
          accent: 'text-amber-500',
          border: 'border-amber-500/20',
          activeBorder: 'bg-amber-500',
          hoverEffect: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
          pillBg: 'bg-amber-500/10',
          pillText: 'text-amber-300',
        };
      case 'beach':
        return {
          accent: 'text-cyan-600 dark:text-cyan-400',
          border: 'border-cyan-500/20',
          activeBorder: 'bg-cyan-600',
          hoverEffect: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
          pillBg: 'bg-cyan-500/10',
          pillText: 'text-cyan-600 dark:text-cyan-300',
        };
      case 'light':
        return {
          accent: 'text-indigo-600',
          border: 'border-indigo-500/20',
          activeBorder: 'bg-indigo-600',
          hoverEffect: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
          pillBg: 'bg-indigo-500/10',
          pillText: 'text-indigo-600',
        };
      case 'dark':
      default:
        return {
          accent: 'text-indigo-500',
          border: 'border-indigo-500/20',
          activeBorder: 'bg-indigo-500',
          hoverEffect: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
          pillBg: 'bg-indigo-500/10',
          pillText: 'text-indigo-300',
        };
    }
  };

  const styles = getThemeStyles() || {
    accent: 'text-indigo-500',
    border: 'border-indigo-500/20',
    activeBorder: 'bg-indigo-500',
    hoverEffect: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    pillBg: 'bg-indigo-500/10',
    pillText: 'text-indigo-300',
  };

  const categoryIcons: Record<string, ReactNode> = {
    'Frontend Development': <Layout className={`h-6 w-6 ${styles.accent}`} />,
    'Backend Development': <Server className={`h-6 w-6 ${styles.accent}`} />,
    Database: <Database className={`h-6 w-6 ${styles.accent}`} />,
    'Cloud & DevOps': <Cloud className={`h-6 w-6 ${styles.accent}`} />,
    'Programming Languages': <Code className={`h-6 w-6 ${styles.accent}`} />,
    'Tools & Practices': <Cpu className={`h-6 w-6 ${styles.accent}`} />,
    Other: <Layers className={`h-6 w-6 ${styles.accent}`} />,
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
            My Skills & Technologies
          </h2>
          <div className={`mt-2 h-1 w-20 ${styles.activeBorder} mx-auto`}></div>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            I've worked with a variety of technologies and frameworks to create responsive and
            efficient applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(categorizedSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              variants={fadeIn}
              className={`border ${styles.border} rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${styles.hoverEffect} shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                {categoryIcons[category] || <Code className={`h-6 w-6 ${styles.accent}`} />}
                <h3 className="text-xl font-semibold text-foreground">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: string) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${styles.pillBg} ${styles.pillText}`}
                  >
                    <Check className="mr-1 h-3 w-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
