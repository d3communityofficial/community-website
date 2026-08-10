import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discussions | Digital Dreamers Den (D3)',
  description: 'Join the conversation — Digital Dreamers Den',
  alternates: {
    canonical: '/discussions',
  },
  openGraph: {
    url: '/discussions',
    title: 'Discussions | Digital Dreamers Den (D3)',
    description: 'Join the conversation — Digital Dreamers Den',
  },
  twitter: {
    title: 'Discussions | Digital Dreamers Den (D3)',
    description: 'Join the conversation — Digital Dreamers Den',
  },
};

const IFRAME_SRC = 'https://digitaldreamersden.github.io/d3-leader-board/discussions';

export default function Discussions() {
  return (
    <div className="fixed inset-0 m-0 h-dvh w-full overflow-hidden bg-dark-bg">
      <iframe
        src={IFRAME_SRC}
        title="Digital Dreamers Den"
        className="block h-full w-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
