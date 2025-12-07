export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          I'm Ilyas Mohamed, an Odoo Developer and Full-Stack Web Developer passionate about building intelligent systems that help companies automate and scale.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">My Expertise</h2>
        <p className="mb-4">
          I specialize in Odoo ERP implementation, customization, and integrations, as well as modern web applications using Next.js, React, TypeScript, Node.js, and cloud-ready deployment architectures.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
        <ul className="space-y-2 mb-6">
          <li>• Odoo ERP Implementation & Customization</li>
          <li>• Business Process Automation & Workflow Design</li>
          <li>• Custom Odoo Module Development</li>
          <li>• Full-Stack Web Applications with Next.js & React</li>
          <li>• API Integrations & System Architecture</li>
          <li>• ERP Deployment & Performance Optimization</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>
        <p className="mb-6">
          I focus on understanding business needs, designing efficient solutions, and delivering scalable systems that drive real value and operational efficiency.
        </p>

        <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
          <h3 className="text-xl font-bold mb-3 text-primary-800">Let's Build Together!</h3>
          <p className="text-primary-700">
            Whether you need Odoo implementation, custom development, or a modern web application, I'm here to help transform your business challenges into technical solutions.
          </p>
        </div>
      </div>
    </div>
  );
}