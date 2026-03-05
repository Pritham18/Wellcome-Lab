'use client'

import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function ImageLightbox({ src, alt, caption, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Clickable Image Thumbnail */}
      <figure 
        className={`group cursor-pointer rounded-lg overflow-hidden border transition-all hover:shadow-lg ${className}`}
        style={{ borderColor: 'var(--border)' }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative bg-white">
          <img 
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          {/* Zoom Indicator Overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-gray-800 text-sm font-medium shadow-md">
              <ZoomIn className="w-4 h-4" />
              Click to enlarge
            </div>
          </div>
        </div>
        {caption && (
          <figcaption 
            className="p-3 text-sm border-t leading-relaxed"
            style={{ color: 'var(--muted)', borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full Size Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg p-2">
              <img 
                src={src}
                alt={alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            {caption && (
              <div className="mt-4 text-center text-white/90 text-sm max-w-2xl mx-auto leading-relaxed">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
