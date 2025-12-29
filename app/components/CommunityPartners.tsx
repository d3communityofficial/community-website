
import Image from "next/image";
import { Handshake } from "lucide-react";
import { communityPartners } from "../data/communityPartners";

export default function CommunityPartners() {
  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
        <Handshake className="w-6 h-6 text-dark-secondary" />
        Community Partners
      </h2>

      <div className="py-3">
        {/* Grid container */}
        <div className="partners-grid-bg rounded-xl p-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {communityPartners.map((partner, index) => {
              // 4th and 6th logos full-size (if needed)
              const isFullSize = index === 3 || index === 5;

              const imgClasses = [
                "w-full h-full",
                "object-cover",
                "transition-transform duration-200 group-hover:scale-105",
              ];

              if (partner.invertDark) {
                imgClasses.push("dark:filter", "dark:invert", "dark:brightness-150");
              }
              if (partner.invertLight) {
                imgClasses.push("filter", "invert", "brightness-150");
              }
              if (partner.needsShadow) {
                imgClasses.push("drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]");
              }

              return (
                <div key={partner.name} className="group flex flex-col items-center">
                  {/* Card */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.name}
                    className="
                      relative group
                      w-full aspect-square
                      rounded-xl
                      overflow-hidden
                      border border-transparent
                      hover:border-blue-500
                      transition-all duration-200
                      flex items-center justify-center
                    "
                  >
                    {/* URL / External link icon */}
                    <span
                      className="
                        absolute top-2 right-2
                        w-5 h-5
                        rounded-full
                        bg-white/80 dark:bg-slate-800/60
                        flex items-center justify-center
                        text-slate-600 dark:text-slate-200
                        transition-colors
                        group-hover:bg-blue-500
                        group-hover:text-white
                        z-10
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </span>

                    {/* Logo */}
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={400}
                      height={400}
                      className={imgClasses.join(" ")}
                    />
                  </a>

                  {/* Name */}
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center truncate text-black dark:text-white group-hover:text-blue-500 transition-colors">
                    {partner.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

