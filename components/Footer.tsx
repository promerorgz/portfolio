'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone, Heart, ExternalLink } from 'lucide-react';
import { data } from '@/lib/data';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              {data.name.split(' ')[0]}
              <span className="text-indigo-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Sr. Full Stack Engineer specializing in building exceptional digital experiences with
              modern web technologies.
            </p>
            <div className="flex space-x-3">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-indigo-500 rounded-full flex justify-center items-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-indigo-500 rounded-full flex justify-center items-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-indigo-500 rounded-full flex justify-center items-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors hover:text-indigo-400 ${
                      pathname === item.href ? 'text-indigo-500' : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="grid grid-cols-2 gap-2">
              {data.skills
                .flatMap(category =>
                  category.technologies.slice(0, 3).map((tech, index) => (
                    <span key={`${category.category}-${index}`} className="text-sm text-gray-300">
                      {tech}
                    </span>
                  ))
                )
                .slice(0, 10)}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <Mail className="h-4 w-4 mr-2 text-indigo-500" />
                  {data.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${data.phone}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <Phone className="h-4 w-4 mr-2 text-indigo-500" />
                  {data.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
                </a>
              </li>
              <li className="text-gray-300 flex items-center text-sm">
                <ExternalLink className="h-4 w-4 mr-2 text-indigo-500" />
                {data.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400 flex items-center justify-center">
            &copy; {currentYear} {data.name}. Built with
            <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
