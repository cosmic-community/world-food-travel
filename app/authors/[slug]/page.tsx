// app/authors/[slug]/page.tsx
import { getAuthor, getPostsByAuthor } from '@/lib/cosmic'
import { Author, Post } from '@/types'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthor(slug) as Author | null

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id) as Post[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Author Header */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        {author.metadata?.photo && (
          <img
            src={`${author.metadata.photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
            alt={author.title}
            width={200}
            height={200}
            className="rounded-lg"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {author.metadata?.name || author.title}
          </h1>
          {author.metadata?.bio && (
            <p className="text-xl text-gray-600">
              {author.metadata.bio}
            </p>
          )}
          <div className="mt-6">
            <p className="text-gray-600">
              {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No posts from this author yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}