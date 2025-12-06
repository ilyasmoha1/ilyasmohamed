export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-12">
        Thoughts, tutorials, and insights about web development and technology.
      </p>
      
      <div className="text-center py-12">
        <div className="inline-block p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Blog Coming Soon</h3>
          <p className="text-gray-600">
            I'm currently working on my first blog posts. Check back soon for content!
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