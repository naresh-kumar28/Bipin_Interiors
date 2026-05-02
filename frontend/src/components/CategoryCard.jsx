import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // All images including the main category image
  const allImages = [category.image, ...(category.project_images || [])];

  useEffect(() => {
    if (isHovered && allImages.length > 1) {
      // Immediately swap to the second image if available
      setCurrentImageIndex(1);
      
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 2000); 
    } else {
      clearInterval(intervalRef.current);
      setCurrentImageIndex(0); // Reset to first image when not hovering
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, allImages.length]);

  return (
    <Link 
      to={`/portfolio?category=${category.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl"
    >
      {/* Dynamic Image Container */}
      <div className="absolute inset-0 w-full h-full bg-muted">
        {allImages.map((img, idx) => (
          <img 
            key={idx}
            src={img}
            alt={`${category.name} ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform 
              ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
              ${isHovered ? 'scale-105' : 'scale-100'}
            `}
          />
        ))}
      </div>

      {/* Progress Indicators (Only show on hover) */}
      {isHovered && allImages.length > 1 && (
        <div className="absolute top-4 left-6 right-6 z-30 flex gap-1.5">
          {allImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-primary' : 'bg-white/30'}`}
            ></div>
          ))}
        </div>
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-20 transition-transform duration-500 group-hover/card:-translate-y-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-sm uppercase tracking-widest">
            {allImages.length} Projects
          </span>
        </div>
        <h3 className="text-white text-2xl font-heading font-bold mb-1.5">{category.name}</h3>
        <p className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
          Explore Projects <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
        </p>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 border border-white/10 group-hover/card:border-white/30 transition-colors duration-500 pointer-events-none rounded-2xl z-30"></div>
    </Link>
  );
}

export default CategoryCard;
