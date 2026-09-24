import React, { useState } from 'react';
import { MapPin, X, Eye, ArrowRight, MessageCircle } from 'lucide-react';
import { GALLERY_PROJECTS, BUSINESS_INFO } from '../data/roofingData';

interface ProjectsGalleryProps {
  onOpenInspection: (issue?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onOpenInspection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<(typeof GALLERY_PROJECTS)[0] | null>(
    null
  );

  const categories = [
    'All',
    'Tile Roofing',
    'Leak Repair',
    'Flashing & Penetrations',
    'Flat & Skylight',
    'Local Community',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-[#1F293D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
            Authentic Job Site Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Real Roofing Work From Local Naples Projects
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Every photo shown below is authentic, captured during actual roof inspections, tile repairs,
            underlayment replacements, and flashing restorations across Naples, Florida.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FBCB06] text-black font-extrabold'
                  : 'bg-[#121824] text-neutral-300 hover:text-white hover:bg-[#1A2333] border border-[#1F293D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(project)}
              className="group bg-[#121824] border border-[#1F293D] rounded-xl overflow-hidden hover:border-[#FBCB06]/50 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/20"></div>

                <div className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold bg-black/80 text-[#FBCB06] rounded border border-[#FBCB06]/30">
                  {project.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="p-3 rounded-full bg-[#FBCB06] text-black">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#FBCB06] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FBCB06] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-4xl w-full bg-[#121824] border border-[#1F293D] rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#162030] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-[#FBCB06] mb-1">
                    {activePhoto.category} · {activePhoto.location}
                  </div>
                  <h3 className="text-lg font-bold text-white">{activePhoto.title}</h3>
                  <p className="text-xs text-neutral-300 mt-1 max-w-xl">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const title = activePhoto.title;
                      setActivePhoto(null);
                      onOpenInspection(`Question regarding project: ${title}`);
                    }}
                    className="px-4 py-2.5 bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Similar Repair
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
