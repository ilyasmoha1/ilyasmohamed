export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-12">
        Insights on Odoo development, ERP implementation, modern web technologies, and business automation.
      </p>
      
      <div className="text-center py-12">
        <div className="inline-block p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Blog Coming Soon</h3>
          <p className="text-gray-600">
            I'm currently working on articles about Odoo customization, Next.js best practices, and business automation.
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