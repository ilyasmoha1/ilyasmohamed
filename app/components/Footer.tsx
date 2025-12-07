import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ilyasmoha1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ilyasmoha', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ilyasmohamed', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@ilyasmohamed.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-600 dark:text-blue-500">Ilyas</span>Mohamed
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Odoo Developer & Full-Stack Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                About Me
              </Link>
              <Link href="/projects" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Projects
              </Link>
              <Link href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-900 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {currentYear} Ilyas Mohamed. All rights reserved.</p>
          <p className="mt-1 text-sm">
            Developed by <span className="text-blue-600">Ilyas Mohamed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}