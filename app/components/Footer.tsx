import Image from 'next/image';
import { COMMUNITY_EMAIL } from '@/app/constants/contact';
import { getAssetPath } from '@/app/utils/paths';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-dark-border bg-dark-card/50 pt-12 pb-12 md:pt-12 md:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 mx-auto">
            <Image
              src={getAssetPath('/hero/mascot_contact_pose.png')}
              alt="D3 community mascot"
              width={384}
              height={384}
              className="object-contain w-full h-full"
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <p className="text-dark-muted text-lg">
              Have a question or want to collaborate? Reach out to us.
            </p>
            <a
              href={`mailto:${COMMUNITY_EMAIL}`}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-3 text-sm md:text-base rounded-xl font-bold transition-all hover:shadow-lg hover:scale-105 cursor-pointer shrink-0"
              style={{ background: 'var(--gradient-primary)', color: 'white' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
