import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";

export default function SkillsLines() {
  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">MY SKILLS</h2>
        <div className="w-24 h-1 bg-[#ff9966] mx-auto mt-2" />
      </div>

      <div className="space-y-10">
        {SkillsInfo.map((cat) => (
          <div key={cat.title} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-white/90">
                {cat.title}
              </h3>
            </div>

            {/* Skill bar */}
            <div
              className="
                relative h-28 md:h-32
                rounded-2xl border border-white/10 bg-white/5 backdrop-blur
                overflow-x-auto overflow-y-hidden
                flex items-center gap-5 px-4
                [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
              "
            >
              <div className="flex items-center gap-6 min-w-full no-scrollbar">
                {cat.skills.map((s) => (
                  <Tilt
                    key={s.name}
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={900}
                    scale={1.07}
                    transitionSpeed={800}
                    gyroscope={true}
                    className="shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        className="
                          group relative inline-flex items-center justify-center
                          h-14 md:h-16 w-14 md:w-16
                          rounded-2xl border border-white/10 bg-white/10
                          hover:bg-white/15 active:scale-95
                          transition-all
                        "
                        aria-label={s.name}
                        title={s.name}
                      >
                        <img
                          src={s.logo}
                          alt={`${s.name} logo`}
                          className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
                        />
                      </button>
                      {/* label always visible under logo */}
                      <span className="mt-2 text-xs md:text-sm text-white/80 text-center">
                        {s.name}
                      </span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}