export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-600 mb-12 max-w-3xl">
        A collection of Odoo implementations and web development projects showcasing business automation and technical solutions.
      </p>
      
      <div className="text-center py-12">
        <div className="inline-block p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Detailed Case Studies Coming Soon</h3>
          <p className="text-gray-600">
            Check out the featured projects on the homepage, and check back soon for detailed case studies!
          </p>
          <p className="mt-4">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Return to Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}