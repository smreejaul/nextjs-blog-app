import {
    CheckBadgeIcon,
    CloudArrowUpIcon,
    CommandLineIcon,
    CubeTransparentIcon,
    ServerStackIcon,
    FolderOpenIcon,
    InformationCircleIcon,
    RocketLaunchIcon,
    SparklesIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function InfoPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-2">Project Information</h1>
            <p className="text-gray-500 mb-10">Complete documentation of the Reejaul.dev application</p>

            {/* Overview */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <InformationCircleIcon className="h-8 w-8 text-blue-600" />
                    <span>Overview</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-3">
                        <strong>Reejaul.dev</strong> is a full-stack portfolio and blog application built with modern web technologies. It showcases projects, shares knowledge through blog posts, and enables visitor contact.
                    </p>
                    <p className="text-gray-700">
                        This is the personal portfolio of <strong>Syed Reejaul Hussain</strong>, a Principal Software Engineer with 11+ years of experience in building high-performance web applications and enterprise SaaS solutions.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <SparklesIcon className="h-8 w-8 text-blue-600" />
                    <span>Features</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Home Page</h3>
                        <p className="text-sm text-gray-600">Hero section with professional introduction and quick navigation</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">About Page</h3>
                        <p className="text-sm text-gray-600">Professional bio, skills showcase, and technology expertise</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Blog System</h3>
                        <p className="text-sm text-gray-600">Full-featured blog with MongoDB backend and dynamic routing</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Admin Panel</h3>
                        <p className="text-sm text-gray-600">Create and manage blog posts with auto-slug generation</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Projects Showcase</h3>
                        <p className="text-sm text-gray-600">Display portfolio projects with descriptions and tech stack</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Contact Form</h3>
                        <p className="text-sm text-gray-600">Email integration with Resend service for visitor messages</p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <CubeTransparentIcon className="h-8 w-8 text-blue-600" />
                    <span>Tech Stack</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-bold mb-3 text-blue-600">Frontend</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Next.js 16.2.4</li>
                            <li>• React 19.2.4</li>
                            <li>• TypeScript 5</li>
                            <li>• Tailwind CSS 4</li>
                            <li>• PostCSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3 text-green-600">Backend</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Node.js</li>
                            <li>• MongoDB 9.6.1</li>
                            <li>• Mongoose 9.6.1</li>
                            <li>• Resend 6.12.3</li>
                            <li>• Next.js API Routes</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3 text-purple-600">Development</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ESLint 9</li>
                            <li>• Webpack</li>
                            <li>• npm</li>
                            <li>• Git/GitHub</li>
                            <li>• GitHub Copilot</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project Structure */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <FolderOpenIcon className="h-8 w-8 text-blue-600" />
                    <span>Project Structure</span>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div>app/</div>
                    <div className="ml-4">├── api/ (API routes)</div>
                    <div className="ml-4">├── about/ (About page)</div>
                    <div className="ml-4">├── experiences/ (Experiences page)</div>
                    <div className="ml-4">├── admin/ (Admin panel)</div>
                    <div className="ml-4">├── blog/ (Blog pages)</div>
                    <div className="ml-4">├── contact/ (Contact form)</div>
                    <div className="ml-4">├── projects/ (Projects page)</div>
                    <div className="ml-4">├── component/ (Navbar)</div>
                    <div className="ml-4">├── globals.css (Global styles)</div>
                    <div className="ml-4">├── layout.tsx (Root layout)</div>
                    <div className="ml-4">└── page.tsx (Home page)</div>
                    <div className="mt-2">lib/</div>
                    <div className="ml-4">├── db.ts (MongoDB connection)</div>
                    <div className="ml-4">├── resumeData.ts (CV data)</div>
                    <div className="ml-4">└── models/ (Mongoose schemas)</div>
                </div>
            </section>

            {/* Database Schema */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <ServerStackIcon className="h-8 w-8 text-blue-600" />
                    <span>Database Schema</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold mb-3">Post Collection</h3>
                    <div className="font-mono text-sm space-y-1 text-gray-700">
                        <div>_id: ObjectId (Auto-generated)</div>
                        <div>title: string (Required) - Post title</div>
                        <div>slug: string (Required, Unique) - URL-friendly identifier</div>
                        <div>date: string (Required) - Publication date</div>
                        <div>excerpt: string (Required) - Short summary</div>
                        <div>content: string (Required) - Full post content</div>
                        <div>createdAt: Date (Auto-generated)</div>
                        <div>updatedAt: Date (Auto-generated)</div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
                    <span>Getting Started</span>
                </div>

                <h3 className="font-bold mb-3">Prerequisites</h3>
                <ul className="text-sm text-gray-700 mb-6 space-y-1">
                    <li>• Node.js 18 or higher</li>
                    <li>• npm or yarn package manager</li>
                    <li>• MongoDB instance (local or MongoDB Atlas)</li>
                    <li>• Resend API key for email functionality</li>
                </ul>

                <h3 className="font-bold mb-3">Installation Steps</h3>
                <ol className="text-sm text-gray-700 space-y-2 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <li>1. Install dependencies: <code className="bg-gray-200 px-2 py-1 rounded">npm install</code></li>
                    <li>2. Create .env.local with MONGODB_URI and RESEND_API_KEY</li>
                    <li>3. Start dev server: <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code></li>
                    <li>4. Open <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000</code></li>
                </ol>
            </section>

            {/* API Routes */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <CloudArrowUpIcon className="h-8 w-8 text-blue-600" />
                    <span>API Routes</span>
                </div>

                <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">POST /api/posts</h3>
                        <p className="text-sm text-gray-600 mb-2">Create a new blog post</p>
                        <div className="text-xs bg-gray-50 p-2 rounded border border-gray-200">
                            <p className="font-mono">title, slug, date, excerpt, content (all required)</p>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">GET /api/seed</h3>
                        <p className="text-sm text-gray-600">Populate database with sample blog posts</p>
                    </div>
                </div>
            </section>

            {/* Available Scripts */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <CommandLineIcon className="h-8 w-8 text-blue-600" />
                    <span>Available Scripts</span>
                </div>
                <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="font-mono font-bold">npm run dev</p>
                        <p className="text-gray-600">Start development server</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="font-mono font-bold">npm run build</p>
                        <p className="text-gray-600">Create production build</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="font-mono font-bold">npm start</p>
                        <p className="text-gray-600">Start production server</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="font-mono font-bold">npm run lint</p>
                        <p className="text-gray-600">Run ESLint</p>
                    </div>
                </div>
            </section>

            {/* About Developer */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <UserCircleIcon className="h-8 w-8 text-blue-600" />
                    <span>About the Developer</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3">Syed Reejaul Hussain</h3>
                    <p className="font-bold text-gray-700 mb-2">Principal Software Engineer</p>
                    <p className="text-sm text-gray-600 mb-4">11+ years of experience building high-performance, scalable web applications</p>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-bold text-gray-700 mb-2">Core Expertise</p>
                            <p className="text-gray-600">React, Next.js, JavaScript, TypeScript, Tailwind CSS</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 mb-2">Specializations</p>
                            <p className="text-gray-600">Enterprise SaaS, Component Libraries, AI-powered workflows</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 mb-2">Location</p>
                            <p className="text-gray-600">Karachi, Pakistan</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 mb-2">Availability</p>
                            <p className="text-gray-600">Open to Remote & Relocation</p>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-sm text-gray-600">
                            <strong>Contact:</strong> m.reeja.ul.hussain@gmail.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Summary */}
            <section className="mb-12">
                <div className="mb-4 flex items-center gap-3 text-3xl font-bold text-gray-900">
                    <CheckBadgeIcon className="h-8 w-8 text-blue-600" />
                    <span>Key Features Summary</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">Fully Responsive</p>
                            <p className="text-sm text-gray-600">Mobile-first design with Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">Type-Safe</p>
                            <p className="text-sm text-gray-600">Full TypeScript support</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">SEO Optimized</p>
                            <p className="text-sm text-gray-600">Dynamic metadata per post</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">Fast Performance</p>
                            <p className="text-sm text-gray-600">Next.js optimization & caching</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">Easy Admin</p>
                            <p className="text-sm text-gray-600">Intuitive blog management panel</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold">Email Integration</p>
                            <p className="text-sm text-gray-600">Contact form with Resend</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                    <strong>Version:</strong> 0.1.0 • <strong>Last Updated:</strong> May 13, 2026
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    For more detailed information, refer to the comprehensive README documentation.
                </p>
            </section>
        </main>
    );
}
