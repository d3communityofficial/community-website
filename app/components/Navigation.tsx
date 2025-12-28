'use client';

import { useEffect, useState } from 'react';
import {
  NAVIGATION_SECTIONS,
  NAVIGATION_ITEMS,
  SCROLL_CONFIG,
  EXTERNAL_LINKS,
} from '../../constants/navigation';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * SCROLL_CONFIG.DETECTION_OFFSET;

      // Find the current section
      let currentSection = 'home';

      for (let i = 0; i < NAVIGATION_SECTIONS.length; i++) {
        const section = document.getElementById(NAVIGATION_SECTIONS[i]);
        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop - SCROLL_CONFIG.SECTION_OFFSET) {
            currentSection = NAVIGATION_SECTIONS[i];
          }
        }
      }

      setActiveSection(currentSection);

      // Check if we're at the top of the page
      if (window.scrollY < SCROLL_CONFIG.TOP_THRESHOLD) {
        setActiveSection('home');
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 nav-glass text-dark-text px-4 md:px-6 py-3 rounded-full border border-dark-border shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center gap-3 md:gap-6 max-w-[95vw] md:max-w-none overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`font-bold flex items-center gap-2 transition-colors ${
          activeSection === 'home'
            ? 'nav-active'
            : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            activeSection === 'home' ? 'nav-active-dot' : 'bg-dark-muted'
          }`}
        ></div>
        <span className="hidden sm:inline">Home</span>
      </a>
      <div className="h-4 w-px divider-dark-bg"></div>
      {NAVIGATION_ITEMS.filter((item) => item.id !== 'home').map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(item.id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className={`text-sm font-medium transition-colors ${
            activeSection === item.id
              ? 'nav-active font-bold'
              : 'text-dark-muted hover:text-dark-text'
          }`}
        >
          {item.label}
        </a>
      ))}
      <div className="h-4 w-px divider-dark-bg"></div>
      <a
        href={EXTERNAL_LINKS.DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-dark-primary text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-indigo-400 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"
      >
        Join
      </a>
    </nav>
  );
}
