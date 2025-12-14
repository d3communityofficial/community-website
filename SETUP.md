# Digital Dreamers Den (D3) - Community Website

## 🎉 Project Setup Complete!

The community website has been successfully built using the provided HTML prototypes (both light and dark versions).

## ✅ What Was Done

### 1. **Dependencies Installed**
- `lucide-react` - For beautiful, consistent icons
- `next-themes` - For seamless light/dark theme switching

### 2. **Configuration**
- Updated Tailwind CSS v4 configuration with custom colors for both light and dark modes
- Configured custom fonts: Plus Jakarta Sans (dark mode) and Quicksand (light mode)
- Set up proper metadata and SEO

### 3. **Components Created**
- `ThemeProvider.tsx` - Handles theme context and switching
- `ThemeToggle.tsx` - Sun/Moon toggle button for theme switching
- Main page component with all sections from the prototypes

### 4. **Features Implemented**
- ✨ **Bento Grid Layout** - Modern, responsive card-based design
- 🌓 **Theme Switching** - Automatic light/dark mode with toggle
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎨 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- 🔗 **Navigation** - Floating pill navigation at the bottom
- 👥 **Team Section** - Core team members with avatars
- 📅 **Events Section** - Upcoming and past events showcase
- 📊 **Stats Display** - Community metrics
- 🌍 **Location Info** - Chennai hub information

### 5. **Clean Up**
- Removed all default Next.js boilerplate files
- Deleted unused public assets (SVGs)
- Removed prototype HTML files

## 🚀 How to Run

The development server is already running on **port 3001** (port 3000 was already in use).

Visit: **http://localhost:3001**

If you need to restart the server:
```bash
bun run dev
```

## 🎨 Theme Switching

The website automatically detects your system preference and applies the appropriate theme. You can manually toggle between light and dark modes using the Sun/Moon icon in the header.

- **Light Mode**: Bright, creative, artistic design with pastel colors
- **Dark Mode**: Sleek, modern, cyberpunk-inspired with indigo accents

## 📂 Project Structure

```
/app
  /components
    - ThemeProvider.tsx
    - ThemeToggle.tsx
  - layout.tsx (updated with fonts and theme provider)
  - page.tsx (main landing page)
  - globals.css (custom styles and Tailwind config)
```

## 🔧 Tech Stack

- **Next.js 16** (latest with App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (latest, CSS-based configuration)
- **Lucide React** (icons)
- **next-themes** (theme switching)
- **Bun** (package manager)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

The design adapts seamlessly across all screen sizes with different layouts and content visibility.

## 🎯 Key Sections

1. **Hero Block** - Main call-to-action with tagline
2. **Next Event** - Featured upcoming event
3. **Community Stats** - Member count
4. **Location** - Hub information
5. **Tech Stack** - Technologies used
6. **Social/Community** - Join CTA
7. **Mission Logs** - Past events archive
8. **Core Units** - Team members

## 🔗 External Links

- Bento.me: https://bento.me/d3community
- GitHub: (placeholder - update in page.tsx)
- Twitter: (placeholder - update in page.tsx)

## 🎨 Color Palette

### Light Mode
- Primary: #4f46e5 (Indigo)
- Secondary: #fbbf24 (Amber)
- Background: #f1f5f9 (Light Gray)

### Dark Mode
- Primary: #6366f1 (Lighter Indigo)
- Secondary: #fbbf24 (Amber)
- Background: #020617 (Dark Slate)

## 📝 Notes

- The website uses CSS Grid for the main bento layout
- Hover effects are optimized for desktop users
- Mobile users get a simplified, touch-friendly interface
- Images are loaded from external CDNs (undraw.co and dicebear.com)
- The nav bar is fixed at the bottom for easy thumb access on mobile

## ✨ Next Steps (Optional)

1. Replace placeholder social links with real ones
2. Add real event data (consider a CMS or database)
3. Implement RSVP functionality
4. Add analytics tracking
5. Set up a backend for form submissions
6. Add more team members
7. Create individual event pages
8. Implement search/filter for events

---

Built with ❤️ for the Digital Dreamers Den community

