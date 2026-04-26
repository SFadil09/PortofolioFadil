'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  { src: '/krti-1.JPG', alt: 'KRTI 2024 documentation photo 1' },
  { src: '/krti-2.JPG', alt: 'KRTI 2024 documentation photo 2' },
  { src: '/krti-3.JPG', alt: 'KRTI 2024 documentation photo 3' },
]

export default function KRTISlider() {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-white mb-6">Competition Documentation</h3>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl overflow-hidden [&_.swiper-button-next]:text-indigo-400 [&_.swiper-button-prev]:text-indigo-400 [&_.swiper-pagination-bullet-active]:bg-indigo-400 [&_.swiper-pagination-bullet]:bg-zinc-500 pb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900/60 border border-white/[0.07]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
