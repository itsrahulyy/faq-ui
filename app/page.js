'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import FaqCard from '@/components/FaqCard';
import faqs from '@/data/faqs.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [, setCurrentSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiperRef(swiper);
  };

  return (
    <div
      className="min-h-screen relative py-8 px-4 sm:py-12"
      style={{
        backgroundImage: 'url(/wellness-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(248,113,30,0.12),_transparent_22%)]" />
      <main className="relative max-w-4xl mx-auto min-h-screen flex flex-col justify-start pt-6 pb-12 sm:pt-10 sm:pb-16">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 gap-4">
          <img src="/habuild-logo.webp" alt="Habuild logo" className="h-16 sm:h-20" />
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.22em] text-[#F7931E] uppercase">
            OFFLINE COMMUNITY
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-tight">
            YOGA <span className="text-slate-600">MEETUP</span>
          </h1>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col justify-center px-2 sm:px-0">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              type: 'bullets',
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            onSwiper={handleSwiper}
            className="faq-swiper w-full"
          >
            {faqs.map((faq, index) => (
              <SwiperSlide key={faq.id}>
                <div className="flex justify-center items-start px-2 sm:px-0">
                  <FaqCard faq={faq} index={index + 1} total={faqs.length} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12 sm:mt-16">
          <button
            className="swiper-button-prev-custom flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-700 text-orange-500 transition-all hover:bg-slate-600 hover:text-orange-400"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="swiper-button-next-custom flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-700 text-orange-500 transition-all hover:bg-slate-600 hover:text-orange-400"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Swipe Instruction */}
        <div className="text-center mt-8 sm:mt-12 text-gray-400 text-xs sm:text-sm">
          <p>swipe to explore • arrow keys work too</p>
        </div>
      </main>
    </div>
  );
}
