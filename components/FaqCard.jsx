import { useState } from 'react';

export default function FaqCard({ faq, index, total }) {
  const [mediaError, setMediaError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Determine what media to show
  const hasVideo = faq.video && faq.video.trim() !== '';
  const hasImage = faq.image && faq.image.trim() !== '';

  const handleVideoError = () => {
    setMediaError(true);
    setIsVideoLoading(false);
  };

  const handleImageError = () => {
    setMediaError(true);
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="faq-card bg-transparent border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl flex flex-col h-[58vh] sm:h-auto sm:max-h-none">
      {/* Content Container */}
      <div className="content p-4 sm:p-6 flex-shrink-0 bg-teal-900 text-white backdrop-blur-xl">
        <div className="text-white-500 text-sm font-bold mb-3">QUESTION {index}</div>
        <h3 className="text-3xl sm:text-3xl font-bold text-white mb-3 leading-tight">{faq.question}</h3>
        <p className="text-teal-100 text-sm sm:text-base leading-relaxed sm:leading-7">{faq.answer}</p>
      </div>

      {/* Media Container */}
      <div className="media-container relative bg-slate-600/40 flex-1 min-h-[45vh] sm:min-h-[16rem] flex items-center justify-center overflow-hidden">
        {mediaError && !hasVideo && !hasImage ? (
          <div className="w-full h-full flex items-center justify-center text-gray-400 px-4">
            <p className="text-center">Media unavailable</p>
          </div>
        ) : hasVideo && !mediaError ? (
          // Video Player
          <div className="w-full h-full relative">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-600">
                <div className="animate-spin">
                  <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            )}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src={faq.video}
              controls
              className="w-full h-full object-cover"
              loading="lazy"
              onError={handleVideoError}
              onLoadStart={handleVideoLoadStart}
              onCanPlay={handleVideoCanPlay}
              preload="metadata"
            />
          </div>
        ) : hasImage && !mediaError ? (
          // Image Display
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={faq.image}
            alt={faq.question}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          // Fallback - Text Only
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-slate-600 px-4">
            <p className="text-center">No media available</p>
          </div>
        )}

        {/* Badge */}
        <div className="badge absolute top-4 right-4 bg-black bg-opacity-75 text-orange-500 px-3 py-1 rounded-full text-xs font-bold">
          {faq.badge}
        </div>
      </div>

      {/* Pagination Info */}
      {total && (
        <div className="px-6 pb-4 text-gray-400 text-sm text-right">{index} / {total}</div>
      )}
    </div>
  );
}