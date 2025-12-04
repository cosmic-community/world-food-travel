'use client'

import { useState } from 'react'
import { CommentFormData, CommentFormResponse } from '@/types'

interface CommentFormProps {
  postId: string
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [formData, setFormData] = useState<Omit<CommentFormData, 'post_id'>>({
    author_name: '',
    author_email: '',
    comment_text: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState<CommentFormResponse | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponse(null)

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          post_id: postId
        })
      })

      const data: CommentFormResponse = await res.json()
      setResponse(data)

      if (data.success) {
        setFormData({
          author_name: '',
          author_email: '',
          comment_text: ''
        })
      }
    } catch (error) {
      setResponse({
        success: false,
        message: 'Failed to submit comment',
        error: 'An unexpected error occurred. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Leave a Comment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author_name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="author_name"
            value={formData.author_name}
            onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="author_email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="author_email"
            value={formData.author_email}
            onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="your.email@example.com"
          />
          <p className="text-xs text-gray-500 mt-1">Your email will not be published</p>
        </div>

        <div>
          <label htmlFor="comment_text" className="block text-sm font-medium text-gray-700 mb-1">
            Comment *
          </label>
          <textarea
            id="comment_text"
            value={formData.comment_text}
            onChange={(e) => setFormData({ ...formData, comment_text: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
            placeholder="Share your thoughts..."
            minLength={10}
            maxLength={1000}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.comment_text.length}/1000 characters
          </p>
        </div>

        {response && (
          <div
            className={`p-4 rounded-lg ${
              response.success
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="font-medium">{response.message}</p>
            {response.error && <p className="text-sm mt-1">{response.error}</p>}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>
    </div>
  )
}