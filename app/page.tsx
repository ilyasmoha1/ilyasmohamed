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
              I'm <span className="text-primary-600 dark:text-primary-500">Ilyas Mohamed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Odoo Developer & Full-Stack Web Developer specializing in ERP systems, business automation, and modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:block mt-10 md:mt-0 relative">
            <img
              src="/images/hero-decor.png"
              alt="Illustration of web & ERP systems"
              className="max-w-[420px] pointer-events-none animate-hero-float dark:opacity-80 rounded-full"
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
                <skill.icon className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 rounded-full text-sm"
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
            <Link href="/projects" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                        <Github className="h-5 w-5 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
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
          <div className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-start md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee group-hover:[animation-play-state:paused]">
              <ul className="flex items-center justify-start md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                {[
                  '02 Mini Logo-01.png',
                  'Header Logo-01.png',
                  'LOGO-01.png',
                  'logo (1).png',
                  'Main Logo-01.png',
                  'masjid cj.jpg',
                  'Mini Logo-01.png',
                  'Samira Soomaal Logo.jpg',
                  'Tayo Restaurant.jpg',
                  'Tusmo Logo-01.png'
                ].map((logo) => (
                  <li key={logo} className="mx-8">
                    <div className="w-40 h-24 flex items-center justify-center bg-white dark:bg-neutral-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-4">
                      <img
                        src={`/clients/${logo}`}
                        alt={`Client logo ${logo}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-start md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                {[
                  '02 Mini Logo-01.png',
                  'Header Logo-01.png',
                  'LOGO-01.png',
                  'logo (1).png',
                  'Main Logo-01.png',
                  'masjid cj.jpg',
                  'Mini Logo-01.png',
                  'Samira Soomaal Logo.jpg',
                  'Tayo Restaurant.jpg',
                  'Tusmo Logo-01.png'
                ].map((logo) => (
                  <li key={`${logo}-duplicate`} className="mx-8">
                    <div className="w-40 h-24 flex items-center justify-center bg-white dark:bg-neutral-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-4">
                      <img
                        src={`/clients/${logo}`}
                        alt={`Client logo ${logo}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-primary-800 to-primary-600 text-white px-6 py-16 md:px-12 md:py-20 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Intelligent Business Solutions
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Looking for Odoo implementation, custom development, or web application solutions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full bg-white text-primary-900 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}