import { ArrowRight, Code, Palette, Zap, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Odoo ERP Implementation – Trading Company',
      description: 'Implemented a full Odoo ERP system covering Sales, Inventory, Accounting, HR, and custom workflows to streamline operations.',
      tags: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'ERP', 'Business Automation'],
      github: 'https://github.com/ilyasmoha1',
      live: 'https://demo.ilyasmohamed.com',
    },
    {
      id: 2,
      title: 'Custom Odoo Module – HR & Payroll Automation',
      description: 'Developed advanced payroll calculations, attendance integration, and automated HR workflows tailored to client needs.',
      tags: ['Odoo Studio', 'Python', 'QWeb', 'HR', 'Payroll', 'Automation'],
      github: 'https://github.com/ilyasmoha1',
      live: 'https://demo.ilyasmohamed.com',
    },
    {
      id: 3,
      title: 'Full-Stack Web App – Next.js SaaS Platform',
      description: 'Built a scalable SaaS application using Next.js, Node.js, and PostgreSQL with authentication, dashboard analytics, and API integrations.',
      tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'SaaS', 'Authentication'],
      github: 'https://github.com/ilyasmoha1',
      live: 'https://ilyasmohamed.vercel.app',
    },
  ];

  const skills = [
    {
      icon: Code,
      title: 'Odoo Development',
      items: ['Python', 'XML', 'PostgreSQL', 'ORM', 'Odoo Studio', 'QWeb Reports', 'API Integrations', 'Module Customization']
    },
    {
      icon: Palette,
      title: 'Full-Stack Development',
      items: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Authentication', 'Database Design']
    },
    {
      icon: Zap,
      title: 'Consultancy & Deployment',
      items: ['Business Analysis', 'Requirements Gathering', 'Workflow Design', 'ERP Implementation', 'Linux (Ubuntu)', 'Docker', 'Odoo Deployment', 'Performance Optimization']
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left flex-1 md:pr-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              I'm <span className="text-blue-600 dark:text-blue-500">Ilyas Mohamed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Odoo Developer & Full-Stack Web Developer specializing in ERP systems, business automation, and modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:block mt-10 md:mt-0 relative">
            <img
              src="/images/hero-decor.png"
              alt="Illustration of web & ERP systems"
              className="max-w-[420px] pointer-events-none animate-hero-float dark:opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${(2 + index) * 100}ms` }}
              >
                <skill.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              View all projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${(2 + index) * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/images/project-${project.id}.png`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <Github className="h-5 w-5 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                        Live Demo
                        <ExternalLink className="h-5 w-5 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Customers Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-6">Trusted by</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">Companies I’ve helped implement Odoo and web solutions.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {['customer-1', 'customer-2', 'customer-3', 'customer-4', 'customer-5', 'customer-6'].map((c, i) => (
              <div key={c} className="flex items-center justify-center p-3 bg-white/60 dark:bg-neutral-800/50 rounded-md shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md border border-gray-100 dark:border-gray-800">
                <img src={`/images/${c}.png`} alt={`Logo of ${c.replace('-', ' ')}`} className="max-h-12 object-contain dark:brightness-200 dark:grayscale pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Intelligent Business Solutions
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Looking for Odoo implementation, custom development, or web application solutions?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}