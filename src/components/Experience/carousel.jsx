"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const AnimatedCarousel = ({
  slides = [],
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((p) => (p + 1) % slides.length);
  const handlePrev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  const isActive = (i) => i === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-5xl lg:max-w-6xl md:px-8 lg:px-12">
      {/* Make text a bit wider than the image on md+ */}
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-5">
        {/* Left: Image carousel (2/5 width on md+) */}
        <div className="md:col-span-2">
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {slides.map((img, index) => (
                <motion.div
                  key={img.src || index}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : slides.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={img.src}
                    alt={img.alt || `slide-${index + 1}`}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Wider text column (3/5 width on md+) */}
        <div className="md:col-span-3 flex flex-col justify-between py-2">
          {slides.length > 0 && (
            <motion.div
              key={`static-${active}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {slides[active]?.title && (
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                  {slides[active].title}
                </h3>
              )}
              {slides[active]?.paragraph && (
                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-neutral-300 whitespace-pre-line">
                  {slides[active].paragraph}
                </p>
              )}
            </motion.div>
          )}

          <div className="flex gap-4 pt-10 md:pt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCarousel;