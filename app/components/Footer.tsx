import { Github, Linkedin, Facebook, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ilyasmoha1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ilyasmoha', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/ilyaasmoallim', label: 'Facebook' },
    { icon: Phone, href: 'https://wa.me/252615059173', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.svg" alt="Ilyas Mohamed Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
              Odoo Developer & Full-Stack Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                About Me
              </Link>
              <Link href="/projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Projects
              </Link>
              <Link href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
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
                  className="p-2 bg-white dark:bg-gray-900 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
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
            Developed by <span className="text-primary-600">Ilyas Mohamed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}