'use client';

import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import { useTheme } from '../context/ThemeContext';

const SAU_SCRIPT_SRC = 'https://embed.sayabout.us/widgets.min.js';
const SAU_WIDGET_SLUG = 'YLNdVBxp';
const THEME_STYLE_ID = 'd3-sau-theme-bridge';

/**
 * Overrides SayAbout masonry widget visuals using site theme tokens.
 * The widget uses `attachShadow({ mode: 'open' })`, so we can append styles.
 * Custom properties are inherited from the light DOM onto :host, so they track `data-theme` on <html>.
 */
const SAU_THEME_BRIDGE_CSS = `
.samg-wrapper {
  background: transparent !important;
}
.samg-grid {
  background: transparent !important;
}
.samg-card,
.samg-card.samg-card--dark {
  background-color: var(--color-card) !important;
  border-color: var(--color-border) !important;
}
.samg-content,
.samg-content.samg-content--dark {
  color: var(--color-text) !important;
}
.samg-name,
.samg-name.samg-name--dark {
  color: var(--color-text) !important;
}
.samg-author,
.samg-author.samg-author--dark,
.samg-author-text {
  color: var(--color-muted) !important;
}
/* SayAbout default: light #f3f4f6 / dark #374151 — soften dark border vs site tokens */
:host-context(html[data-theme='dark']) .samg-author,
:host-context(html[data-theme='dark']) .samg-author.samg-author--dark {
  border-top-color: color-mix(in srgb, var(--color-border) 82%, transparent) !important;
}
.samg-load-more,
.samg-load-more.samg-load-more--dark {
  background-color: var(--color-card) !important;
  border-color: var(--color-border) !important;
  color: var(--color-text) !important;
}
.samg-load-more-text {
  color: var(--color-text) !important;
}
.samg-empty,
.samg-empty.samg-empty--dark {
  background-color: var(--color-card) !important;
  border-color: var(--color-border) !important;
}
.samg-empty-title {
  color: var(--color-text) !important;
}
.samg-empty-text {
  color: var(--color-muted) !important;
}
.samg-badge-link {
  display: none !important;
}
`;

function injectSauThemeBridge(host: HTMLElement): boolean {
  const root = host.shadowRoot;
  if (!root) return false;
  let style = root.getElementById(THEME_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = THEME_STYLE_ID;
    root.appendChild(style);
  }
  style.textContent = SAU_THEME_BRIDGE_CSS;
  return true;
}

export default function AttendeeTestimonials() {
  const { theme } = useTheme();
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${SAU_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = SAU_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 150;

    const tryBridge = () => {
      if (cancelled) return;
      if (injectSauThemeBridge(host)) return;
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryBridge, 100);
      }
    };

    tryBridge();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (host?.shadowRoot) injectSauThemeBridge(host);
  }, [theme]);

  return (
    <section id="testimonials" className="pt-16 space-y-6">
      <SectionHeader title="What our attendees say" icon={Quote} />
      <div
        ref={hostRef}
        data-sau-widget-slug={SAU_WIDGET_SLUG}
        data-site-theme={theme}
        style={{ width: '100%' }}
      />
    </section>
  );
}
