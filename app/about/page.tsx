export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Hello! I'm Ilyas Mohamed, a passionate Full-Stack Developer specializing in modern web technologies.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
        <p className="mb-4">
          With a background in computer science and years of hands-on experience, I've developed 
          a deep understanding of both frontend and backend technologies. I believe in creating 
          applications that are not only functional but also provide exceptional user experiences.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
        <ul className="space-y-2 mb-6">
          <li>• Build responsive web applications with Next.js and React</li>
          <li>• Develop robust backend systems with Node.js and databases</li>
          <li>• Create efficient, maintainable code with TypeScript</li>
          <li>• Implement modern UI/UX designs with Tailwind CSS</li>
          <li>• Deploy and scale applications on cloud platforms</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>
        <p className="mb-6">
          I focus on clean architecture, performance optimization, and accessibility. 
          Every project is an opportunity to solve problems creatively and deliver value.
        </p>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold mb-3 text-blue-800">Let's Connect!</h3>
          <p className="text-blue-700">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>
      </div>
    </div>
  );
}