import React from "react";
import ShinyText from "./shinytext";
import profileImage from "../../assets/id/idcard.png";
import ProfileCard from "./ProfileCard";
import Resume from '../../pdfs/WebsiteResume.pdf';

function BackgroundPattern() {
  // 80 instead of 120 so fewer, larger labels fill the screen
  const items = Array.from({ length: 80 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="flex flex-wrap w-full h-full justify-center items-center opacity-5 leading-tight">
        {items.map((_, i) => (
          <span
            key={i}
            className="m-4 text-lg sm:text-xl md:text-2xl font-bold uppercase text-gray"
          >
            Sadia Fathima

          </span>
        ))}
      </div>
    </div>
  );
}
 

export default function HeroOffsetClean() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      {/* Repeated name pattern */}
      <BackgroundPattern />

      {/* Soft vignette to help readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/0 via-black/20 to-black/40" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-12 pt-28 md:pt-36 pb-16">
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Data Science · Mobile/Web Development · UI/UX Design
            </span>

            <ShinyText
          text="Hello! I’m Sadia"
          speed={5}
          className="text-[clamp(32px,6vw,64px)] font-extrabold uppercase text-white tracking-tight"
            />

            <p className="bg-gradient-to-r from-[#ff5e62] via-[#ff9966] to-[#6a11cb] bg-clip-text text-transparent">
          A portfolio of what I love to do •ᴗ•
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-3 bg-white/10 hover:bg-white/15 text-white backdrop-blur transition"
          >
            Resume
          </a>
          <a
            href="#work"
            className="rounded-xl px-5 py-3 border border-white/15 hover:border-white/30 text-white transition"
          >
            My Projects
          </a>
            </div>
          </div>

          {/* Right: profile card */}
        <div className="md:col-span-5 flex justify-center md:justify-end items-start">
          <div className="relative -mt-4 md:-mt-10 scale-90 md:scale-100">
            <div className="absolute -inset-14 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(64,187,177,0.25),rgba(84,231,76,0.15)40%,rgba(45,76,203,0.25))] blur-2xl" />
            <div className="relative rounded-[26px] ring-1 ring-white/10 shadow-[0_10px_50px_rgba(0,0,0,.35)]">
              <ProfileCard
                name="Sadia Fathima"
                title="Junior at UC Davis"
                handle="sluggysadi"
                status="Online"
                contactText="Contact Me"
                avatarUrl={profileImage}
                showUserInfo
                enableTilt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
