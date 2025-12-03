# 🍽️ World Food Travel Blog

![App Preview](https://imgix.cosmicjs.com/e94c01c0-d07c-11f0-b693-79ceb5783a41-photo-1565299585323-38d6b0865b47-1764789535320.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application for showcasing world food travel content. Built with Next.js 16 and Cosmic CMS, this blog platform delivers engaging culinary stories, authentic recipes, and cultural food insights from passionate writers around the globe.

## ✨ Features

- 🎨 **Modern Magazine Layout** - Clean, elegant design with focus on food photography
- 📱 **Fully Responsive** - Optimized experience across all devices
- 🖼️ **Image Optimization** - Automatic image optimization using imgix
- 🏷️ **Category Filtering** - Browse posts by cuisine type
- 👤 **Author Profiles** - Dedicated pages for each food writer
- 📝 **Rich Content** - Full markdown support for detailed articles
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69308cbb2794e7afddb51524&clone_repository=69308dee2794e7afddb5154f)

## 📋 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a world food travel blog with posts, authors, and categories"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a world food travel blog with posts, authors, and categories", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React Markdown** - Markdown content rendering
- **Imgix** - Image optimization and delivery

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Single Post by Slug

```typescript
const { object: post } = await cosmic.objects
  .findOne({
    type: 'posts',
    slug: 'your-post-slug'
  })
  .depth(1)
```

### Fetching Posts by Category

```typescript
const { objects: posts } = await cosmic.objects
  .find({
    type: 'posts',
    'metadata.category': categoryId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses the Cosmic SDK to fetch content from your bucket. The content structure includes:

### Content Types

- **Posts** - Blog articles with title, content, featured image, author, and category
- **Authors** - Writer profiles with name, bio, and photo
- **Categories** - Cuisine types for organizing posts

### Relationships

- Posts connect to Authors via object metafield
- Posts connect to Categories via object metafield
- Using `depth(1)` automatically fetches related data in single queries

### Image Optimization

All images use imgix optimization for fast loading:

```typescript
`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`
```

## 🚀 Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Environment Variables for Production

Set these in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

## 📄 License

MIT License - feel free to use this project for your own food blog!

<!-- README_END -->