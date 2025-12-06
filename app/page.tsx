import { ArrowRight, Code, Palette, Zap, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with Next.js, Stripe payments, and PostgreSQL database.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind', 'PostgreSQL'],
      github: 'https://github.com/ilyasmoha1/ecommerce',
      live: 'https://demo.ilyasmohamed.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and drag & drop interface.',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
      github: 'https://github.com/ilyasmoha1/taskapp',
      live: 'https://tasks.ilyasmohamed.com',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with Next.js 14 and deployed on Vercel.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      github: 'https://github.com/ilyasmoha1/portfolio',
      live: 'https://ilyasmohamed.vercel.app',
    },
  ];

  const skills = [
    { icon: Code, title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { icon: Palette, title: 'Design', items: ['Figma', 'Responsive Design', 'UI/UX', 'Framer Motion'] },
    { icon: Zap, title: 'Backend', items: ['Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="text-blue-600">Ilyas Mohamed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer building modern, performant web applications with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <skill.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium">
              View all projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-blue-600">
                        <Github className="h-5 w-5 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? I&apos;d love to hear about it.
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