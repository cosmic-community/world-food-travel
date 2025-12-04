import { NextRequest, NextResponse } from 'next/server'
import { createComment } from '@/lib/cosmic'
import { CommentFormData, CommentFormResponse } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CommentFormData

    // Validate input
    if (!body.author_name || !body.author_email || !body.comment_text || !body.post_id) {
      return NextResponse.json<CommentFormResponse>(
        {
          success: false,
          message: 'Missing required fields',
          error: 'Please fill in all fields'
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.author_email)) {
      return NextResponse.json<CommentFormResponse>(
        {
          success: false,
          message: 'Invalid email format',
          error: 'Please enter a valid email address'
        },
        { status: 400 }
      )
    }

    // Validate comment length
    if (body.comment_text.length < 10) {
      return NextResponse.json<CommentFormResponse>(
        {
          success: false,
          message: 'Comment too short',
          error: 'Please write a comment with at least 10 characters'
        },
        { status: 400 }
      )
    }

    if (body.comment_text.length > 1000) {
      return NextResponse.json<CommentFormResponse>(
        {
          success: false,
          message: 'Comment too long',
          error: 'Please keep your comment under 1000 characters'
        },
        { status: 400 }
      )
    }

    // Create comment in Cosmic
    const comment = await createComment({
      author_name: body.author_name,
      author_email: body.author_email,
      comment_text: body.comment_text,
      post_id: body.post_id
    })

    return NextResponse.json<CommentFormResponse>(
      {
        success: true,
        message: 'Comment submitted successfully! It will appear after moderation.',
        comment: comment as any
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Comment submission error:', error)
    return NextResponse.json<CommentFormResponse>(
      {
        success: false,
        message: 'Server error',
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    )
  }
}