# Reejaul.dev - Portfolio & Blog Application

A modern, full-stack portfolio and blog application built with Next.js, React, TypeScript, and MongoDB. Showcase your projects, share your knowledge through blog posts, and connect with potential collaborators.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Routes](#api-routes)
- [Database](#database)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)

---

## 🎯 Overview

**Reejaul.dev** is a portfolio website for **Syed Reejaul Hussain**, a Principal Software Engineer with 11+ years of experience in building high-performance web applications. This is a full-stack application that includes:

- **Portfolio Showcase** - Display your projects and skills
- **Blog System** - Publish and manage blog posts
- **Admin Panel** - Create and manage blog content
- **Contact Form** - Receive messages from visitors
- **Responsive Design** - Works perfectly on all devices

### About the Developer

**Syed Reejaul Hussain** is a Frontend Software Engineer specializing in:
- React.js & Next.js
- Building scalable SaaS applications
- Enterprise web applications
- AI-powered workflows
- Component libraries and design systems

**Location:** Karachi, Pakistan  
**Availability:** Open to Remote & Relocation  
**Email:** m.reeja.ul.hussain@gmail.com

---

## ✨ Features

### 1. **Home Page**
- Hero section with introduction
- Professional branding
- Quick navigation

### 2. **About Page**
- Professional bio
- Skills showcase
- Technology expertise display

### 3. **Blog System**
- List all published blog posts
- Individual blog post pages with dynamic routing
- SEO-optimized metadata per post
- Markdown-style content display

### 4. **Admin Panel**
- Create new blog posts
- Auto-generate URL slugs from titles
- Post management dashboard
- Form validation

### 5. **Projects Showcase**
- Display portfolio projects
- Project descriptions and technologies used
- Organized project listing

### 6. **Contact Form**
- Email contact form
- Server-side form validation
- Integration with Resend email service
- Success/error notifications

### 7. **Responsive Navigation**
- Sticky header with logo
- Desktop navigation menu
- Mobile hamburger menu
- Quick access links

### 8. **Customizable Styling**
- Tailwind CSS for utility-first styling
- Custom animations (fadeInUp, slideInLeft, slideInRight)
- CSS utility classes (.btn, .card, .section-padding)
- Dark mode support

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 16.2.4
- **UI Library:** React 19.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with PostCSS
- **State Management:** React Hooks

### Backend
- **Runtime:** Node.js (Next.js API routes)
- **Database:** MongoDB 9.6.1
- **ODM:** Mongoose 9.6.1
- **Email Service:** Resend 6.12.3

### Development
- **Package Manager:** npm
- **Linting:** ESLint 9
- **Build Tool:** Webpack (with Next.js)

---

## 📁 Project Structure

```
nextjs-blog-app/
├── app/
│   ├── api/
│   │   ├── posts/
│   │   │   └── route.ts          # POST endpoint to create blog posts
│   │   └── seed/
│   │       └── route.ts          # Database seeding endpoint
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── admin/
│   │   └── page.tsx              # Admin panel for creating posts
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page
│   ├── component/
│   │   └── Navbar.tsx            # Navigation component
│   ├── contact/
│   │   └── page.tsx              # Contact form page
│   ├── projects/
│   │   └── page.tsx              # Projects showcase
│   ├── actions/
│   │   └── contact.ts            # Server action for contact form
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── lib/
│   ├── db.ts                     # MongoDB connection
│   ├── resumeData.ts             # Resume/CV data
│   └── models/
│       └── Post.ts               # Post MongoDB schema
├── public/                       # Static files
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- MongoDB instance (local or MongoDB Atlas)
- Resend API key (for email functionality)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nextjs-blog-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/reejaul-blog
   # OR for MongoDB Atlas:
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/reejaul-blog

   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000`

---

## ⚙️ Configuration

### MongoDB Setup

If using local MongoDB:
```bash
# Start MongoDB service (Windows)
net start MongoDB

# Or using MongoDB Atlas:
# 1. Create a cluster at mongodb.com/cloud/atlas
# 2. Add your IP to network access
# 3. Create a database user
# 4. Copy the connection string to .env.local
```

### Resend Email Configuration

1. Sign up at [Resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`

### Customize Site Information

Edit these files to customize the site:
- **Site metadata:** `app/layout.tsx`
- **About content:** `app/about/page.tsx`
- **Projects:** `app/projects/page.tsx`
- **Resume data:** `lib/resumeData.ts`

---

## 📡 API Routes

### `POST /api/posts`
Create a new blog post.

**Request Body:**
```json
{
  "title": "My First Post",
  "slug": "my-first-post",
  "date": "May 13, 2026",
  "excerpt": "A short summary of the post",
  "content": "Full post content here..."
}
```

**Response:**
```json
{
  "success": true,
  "post": { /* post object */ }
}
```

### `GET /api/seed`
Seed the database with sample blog posts.

**Usage:**
```bash
curl http://localhost:3000/api/seed
```

---

## 💾 Database

### MongoDB Schema - Post

```typescript
{
  _id: ObjectId,
  title: string,           // Post title (required)
  slug: string,           // URL-friendly identifier (required, unique)
  date: string,           // Publication date (required)
  excerpt: string,        // Short summary (required)
  content: string,        // Full post content (required)
  createdAt: Date,        // Auto-generated timestamp
  updatedAt: Date         // Auto-generated timestamp
}
```

### Connect to Database

The application automatically connects to MongoDB through `lib/db.ts`:

```typescript
// Connection is cached to avoid multiple connections
await connectDB();
```

---

## 📖 Usage Guide

### Publishing a Blog Post

1. Navigate to `/admin`
2. Fill in the post details:
   - **Title:** Your post title
   - **Slug:** Auto-generated from title (editable)
   - **Date:** Publication date
   - **Excerpt:** Brief summary
   - **Content:** Full post content
3. Click "Publish Post"
4. View your post at `/blog/[slug]`

### Seeding Sample Data

Run the seed endpoint to populate the database with sample posts:
```bash
curl http://localhost:3000/api/seed
```

Or visit: `http://localhost:3000/api/seed`

### Sending Emails

The contact form uses Resend to send emails. When a visitor submits the contact form:
1. Form data is validated server-side
2. Email is sent via Resend
3. User receives confirmation message

---

## 🔨 Available Scripts

```bash
# Development server with Webpack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach** with Tailwind CSS
- **Sticky navigation** with hamburger menu for mobile
- **Flexible layouts** that adapt to all screen sizes
- **Touch-friendly** interface elements

---

## 🎨 Styling System

### Tailwind CSS v4

The project uses Tailwind CSS v4 with the `@tailwindcss/postcss` plugin.

### Custom CSS Classes

Available in `globals.css`:

```css
.btn                  /* Base button styles */
.btn-primary          /* Primary action button */
.btn-secondary        /* Secondary action button */
.card                 /* Card container styles */
.section-padding      /* Standard section padding */
.bg-gradient-hero     /* Hero gradient background */
.animate-fadeInUp     /* Fade in and slide up animation */
.animate-slideInLeft  /* Slide in from left animation */
.animate-slideInRight /* Slide in from right animation */
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in settings

3. **Environment Variables in Vercel:**
   - `MONGODB_URI`: Your MongoDB connection string
   - `RESEND_API_KEY`: Your Resend API key

4. **Deploy:**
   - Vercel will automatically deploy on push

### Deploy to Other Platforms

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Environment Variables Required:**
- `MONGODB_URI`
- `RESEND_API_KEY`

---

## 🔒 Security Considerations

- ✅ Server-side form validation
- ✅ Environment variables for sensitive data
- ✅ MongoDB connection caching
- ✅ Unique slug constraints
- ✅ Type safety with TypeScript

---

## 📝 Best Practices Implemented

- **Server Components:** Used where appropriate for performance
- **Client Components:** Only when interactivity is needed
- **Dynamic Routing:** Efficient slug-based routing
- **Metadata:** SEO optimization with dynamic metadata
- **Error Handling:** Proper error messages and validation
- **Performance:** Caching and optimized database queries

---

## 🐛 Troubleshooting

### MongoDB Connection Failed

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution:**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env.local`
- Use MongoDB Atlas if local MongoDB has issues

### Email Not Sending

```
Error: RESEND_API_KEY not found
```

**Solution:**
- Add `RESEND_API_KEY` to `.env.local`
- Verify API key validity at Resend dashboard

### Build Errors

```bash
npm run lint
npm run build
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 👤 About the Developer

**Syed Reejaul Hussain**
- Frontend Software Engineer with 11+ years of experience
- Specializing in React, Next.js, and Enterprise SaaS
- Expert in building scalable, high-performance applications
- Track record of shipping component libraries and AI-driven workflows

**Core Competencies:**
- React 18+, Next.js 16
- JavaScript ES6+, TypeScript
- State Management (Redux, Context API)
- UI Frameworks (Tailwind CSS, Bootstrap)
- Responsive Design & Accessibility
- Agile/Scrum methodologies

**Contact:**
- Email: m.reeja.ul.hussain@gmail.com
- LinkedIn: linkedin.com/in/reejaulhussain
- GitHub: github.com/smreejaul
- Portfolio: syed-reejaul-hussain.vercel.app

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

**Last Updated:** May 13, 2026  
**Version:** 0.1.0
