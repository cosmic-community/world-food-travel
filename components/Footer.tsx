export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-gray-900">
                World Food Travel
              </span>
            </div>
            <p className="text-gray-600">
              Discover authentic culinary adventures and food stories from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#latest" className="text-gray-600 hover:text-primary transition-colors">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600">
              A collection of authentic food stories, recipes, and culinary adventures from passionate food writers around the globe.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} World Food Travel Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}