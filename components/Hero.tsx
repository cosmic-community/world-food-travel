export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://imgix.cosmicjs.com/e94c01c0-d07c-11f0-b693-79ceb5783a41-photo-1565299585323-38d6b0865b47-1764789535320.jpg?w=2000&auto=format,compress)'
        }}
      />
      
      {/* Black Opacity Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
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