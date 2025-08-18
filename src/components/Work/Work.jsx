import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../constants";

const TABS = [
  "All",
  "Machine Learning",
  "Data Science/Analytics",
  "App/Web Development",
];

// --- helpers ---
const getLink = (p) =>
  p.file || p.File || p.Figma || p.File2 || p.github || p.webapp || null;

// Infer a category from tags/title/description so you don't have to edit constants.js
const inferCategory = (p) => {
  const tags = (p.tags || []).map((s) => s.toLowerCase());
  const text = `${p.title || ""} ${p.description || ""}`.toLowerCase();

  const isML =
    tags.some((x) =>
      [
        "machine learning",
        "deep learning",
        "nlp",
        "random forest classifier",
        "artifical intelligence",
        "artificial intelligence",
      ].includes(x)
    ) ||
    text.includes("machine learning") ||
    text.includes("deep learning");

  const isDS =
    tags.some((x) =>
      ["r", "eda", "data visualization", "pandas", "numpy", "matplotlib", "streamlit"].includes(x)
    ) ||
    text.includes("data science") ||
    text.includes("analytics");

  const isApp =
    tags.some((x) => ["react", "ui/ux", "design"].includes(x)) ||
    text.includes("app") ||
    text.includes("web");

  if (isML) return "Machine Learning";
  if (isDS) return "Data Science/Analytics";
  if (isApp) return "App/Web Development";
  return "App/Web Development";
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const overlayRef = useRef(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handleCloseModal();
    if (selectedProject) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  const visibleProjects = projects.filter((p) =>
    activeTab === "All" ? true : inferCategory(p) === activeTab
  );

  return (
    <section id="work" className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white tracking-tight">PROJECTS</h2>
        <div className="w-28 h-[3px] mx-auto mt-3 bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)] rounded" />
        <p className="text-white/70 mt-4 text-base md:text-lg">
          A selection of things I’ve built—mixing design, data, and code.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10"
        role="tablist"
        aria-label="Project categories"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition border backdrop-blur
              ${
                activeTab === tab
                  ? "bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)] text-white border-white/0"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((p) => {
          const openHref = getLink(p);
          return (
            <button
              key={p.id}
              onClick={() => handleOpenModal(p)}
              className="
                group text-left rounded-2xl overflow-hidden transition
                border border-white/10 bg-white/5 backdrop-blur
                shadow-[0_10px_40px_rgba(0,0,0,.25)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,.35)] hover:-translate-y-1.5
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            >
              {/* Media */}
              <div className="relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <img src={p.image} alt={p.title || ""} className="w-full aspect-[16/10] object-cover" />
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="text-[11px] px-2 py-1 rounded-full border border-white/10 text-white/70 bg-white/5">
                    {inferCategory(p)}
                  </span>
                </div>

                <p className="mt-3 text-sm text-white/70 line-clamp-3">{p.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)] mr-2" />
                    View details
                  </span>

                  {openHref && (
                    <a
                      href={openHref}
                      onClick={(e) => e.stopPropagation()} // don't open modal if user clicks "Open File"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold rounded-full px-3 py-1.5 text-white
                                 bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)] hover:opacity-90"
                    >
                      Open File
                    </a>
                  )}
                </div>
              </div>

              {/* Gradient hairline border */}
              <div className="pointer-events-none h-px w-full bg-[linear-gradient(90deg,transparent,#ff9966,#ff5e62,#6a11cb,transparent)]" />
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // click-outside close (only when clicking the dark overlay)
            if (e.target === overlayRef.current) handleCloseModal();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl
                       border border-white/10 bg-[#0b0b12]/95 backdrop-blur
                       shadow-[0_40px_120px_rgba(0,0,0,.6)] max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute right-3 top-3 h-10 w-10 rounded-full
                         bg-white/10 hover:bg-white/15 border border-white/10
                         text-white text-xl leading-none flex items-center justify-center
                         focus:outline-none focus:ring-2 focus:ring-white/30 z-10"
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title || ""}
                className="w-full aspect-[16/9] object-contain bg-black/20"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-white/75">{selectedProject.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(selectedProject.tags || []).map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Single Open File Button (gradient) */}
              <div className="mt-6">
                {getLink(selectedProject) && (
                  <a
                    href={getLink(selectedProject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl text-white font-semibold text-center py-2.5 px-5 transition
                               bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)] hover:opacity-90"
                  >
                    Open File
                  </a>
                )}
              </div>

              {/* Extra bottom padding for scroll affordance */}
              <div className="h-2" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;