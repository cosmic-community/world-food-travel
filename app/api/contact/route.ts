import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactFormData, ContactFormResponse } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json<ContactFormResponse>(
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
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          message: 'Invalid email format',
          error: 'Please enter a valid email address'
        },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          message: 'Failed to send email',
          error: error.message || 'An error occurred while sending your message'
        },
        { status: 500 }
      )
    }

    return NextResponse.json<ContactFormResponse>(
      {
        success: true,
        message: 'Message sent successfully!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json<ContactFormResponse>(
      {
        success: false,
        message: 'Server error',
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    )
  }
}