// app/posts/[slug]/page.tsx
import { getPost, getCommentsByPost } from '@/lib/cosmic'
import { Post, Comment } from '@/types'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import CommentsList from '@/components/CommentsList'
import CommentForm from '@/components/CommentForm'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug) as Post | null

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const category = post.metadata?.category
  const featuredImage = post.metadata?.featured_image
  
  // Fetch comments for this post
  const comments = await getCommentsByPost(post.id) as Comment[]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Category Badge */}
      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="inline-block mb-4 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/90 transition-colors"
        >
          {category.title}
        </Link>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {post.metadata?.title || post.title}
      </h1>

      {/* Author Info */}
      {author && (
        <Link
          href={`/authors/${author.slug}`}
          className="flex items-center gap-4 mb-8 group"
        >
          {author.metadata?.photo && (
            <img
              src={`${author.metadata.photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
              alt={author.title}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
              {author.metadata?.name || author.title}
            </p>
            {author.metadata?.bio && (
              <p className="text-sm text-gray-600 line-clamp-1">
                {author.metadata.bio}
              </p>
            )}
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <ReactMarkdown>{post.metadata?.content || ''}</ReactMarkdown>
      </div>

      {/* Comments Section */}
      <div className="border-t border-gray-200 pt-12 mt-12 space-y-8">
        <CommentsList comments={comments} />
        <CommentForm postId={post.id} />
      </div>

      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}