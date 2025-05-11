'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import FirstImage from '@/images/services/01_Startseite 1. Bild.webp';
import SecondImage from '@/images/services/02_Startseite 2. Bild.webp';
import Logo from '@/images/Bauvision_logo.svg';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function ImageSlider() {
    return (
        <div className='w-full overflow-hidden'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="w-full"
            >
                <SwiperSlide className="w-full">
                    <div className="relative w-full aspect-[16/9] lg:mx-0">
                        <Image
                            src={FirstImage}
                            fill
                            alt="Bauvision Service 1"
                            className="rounded-xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="relative w-full aspect-[16/9] lg:mx-0">
                        <Image
                            src={SecondImage}
                            fill
                            alt="Bauvision Service 2"
                            className="rounded-xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="relative w-full aspect-[16/9] lg:mx-0">
                        <Image
                            src={Logo}
                            fill
                            alt="Bauvision Logo"
                            className="rounded-xl object-contain"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}