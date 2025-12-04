import { Comment } from '@/types'

interface CommentsListProps {
  comments: Comment[]
}

export default function CommentsList({ comments }: CommentsListProps) {
  if (comments.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Comments ({comments.length})
      </h3>
      
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {comment.metadata.author_name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-gray-900">
                  {comment.metadata.author_name}
                </h4>
                <span className="text-sm text-gray-500">
                  {new Date(comment.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="text-gray-700 whitespace-pre-wrap">
                {comment.metadata.comment_text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}