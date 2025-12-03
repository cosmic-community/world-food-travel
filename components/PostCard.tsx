import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Featured Image */}
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <img
            src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
      )}

      <div className="p-6">
        {/* Category */}
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block mb-3 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full hover:bg-accent/20 transition-colors"
          >
            {category.title}
          </Link>
        )}

        {/* Title */}
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
            {post.metadata?.title || post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {post.metadata?.content && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.metadata.content.substring(0, 150)}...
          </p>
        )}

        {/* Author */}
        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="flex items-center gap-3 group"
          >
            {author.metadata?.photo && (
              <img
                src={`${author.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={author.title}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {author.metadata?.name || author.title}
              </p>
            </div>
          </Link>
        )}
      </div>
    </article>
  )
}