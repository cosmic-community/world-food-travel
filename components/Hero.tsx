export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the World Through Food
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Authentic culinary adventures and stories from passionate food writers exploring cuisines around the globe.
          </p>
          <a
            href="#latest"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Explore Stories
          </a>
        </div>
      </div>
    </section>
  )
}