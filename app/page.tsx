import { getPosts } from '@/lib/cosmic'
import { Post } from '@/types'
import PostCard from '@/components/PostCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const posts = await getPosts() as Post[]

  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Stories</h2>
          <p className="text-gray-600 mt-2">
            Explore authentic food experiences from around the world
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found. Start adding content to your Cosmic bucket!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}