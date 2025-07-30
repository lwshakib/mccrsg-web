# MC College Rover Scout Group (MCCRSG) - Web Application

A modern, responsive web application for the MC College Rover Scout Group, built with Next.js 15, TypeScript, and Tailwind CSS. This application serves as the official website for the scout group, featuring a beautiful UI with dark/light mode support and comprehensive functionality.

## 🌟 Features

### Core Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Modern UI**: Beautiful, accessible interface built with Radix UI components
- **Bengali Language Support**: Primary language support for Bengali (Bangla)
- **Smooth Animations**: Enhanced user experience with smooth transitions and animations

### Pages & Sections

- **Homepage**: Hero section with call-to-action, achievements showcase, and featured stories
- **About Us**: Information about the scout group and its mission
- **Join Us**: Application and membership information
- **Admin Panel**: Administrative interface for content management
- **404 Page**: Custom error page with navigation back to home

### Technical Features

- **App Router**: Built with Next.js 15 App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Image Optimization**: Next.js Image component for optimized image loading
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Next Themes** - Theme management
- **Sonner** - Toast notifications

### Backend & Database

- **Prisma 6.13.0** - Database ORM
- **PostgreSQL** - Database (configured via environment variables)

### Development Tools

- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
mccrsg-web/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin route group
│   │   └── s/
│   │       ├── admin/     # Admin dashboard
│   │       └── login/     # Admin login
│   ├── (main)/            # Main route group
│   │   ├── about-us/      # About us page
│   │   ├── join-us/       # Join us page
│   │   ├── layout.tsx     # Main layout
│   │   └── page.tsx       # Homepage
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix-based)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── mode-toggle.tsx   # Theme toggle
│   └── nav-items.ts      # Navigation configuration
├── lib/                  # Utility libraries
│   ├── prisma.ts         # Prisma client
│   ├── state.ts          # State management
│   └── utils.ts          # Utility functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
│   ├── favicon_io/       # Favicon files
│   ├── hero.jpg          # Hero image
│   ├── logo.png          # Scout logo
│   └── 404.svg           # 404 illustration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mccrsg-web.git
   cd mccrsg-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/mccrsg_db"
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npm run generate

   # Run database migrations
   npm run migrate:dev
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate` - Generate Prisma client
- `npm run migrate:dev` - Run database migrations (development)
- `npm run migrate:prod` - Run database migrations (production)
- `npm run studio` - Open Prisma Studio

## 🎨 Customization

### Styling

The application uses Tailwind CSS with a custom design system. You can modify:

- Color scheme in `app/globals.css`
- Component styles in `components/ui/`
- Layout styles in respective component files

### Content

- Update navigation items in `components/nav-items.ts`
- Modify page content in respective page files under `app/(main)/`
- Update images in the `public/` directory

### Database

- Modify the database schema in `prisma/schema.prisma`
- Run migrations after schema changes: `npm run migrate:dev`

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

