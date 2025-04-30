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

    return <div>
        <Swiper spaceBetween={0} slidesPerView={1} modules={[Autoplay]} autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}>
            <SwiperSlide>
                <Image
                    src={Logo}
                    width={650}
                    height={600}
                    alt="Images"
                    className="rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={FirstImage}
                    width={650}
                    height={600}
                    alt="Images"
                    className="rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={SecondImage}
                    width={650}
                    height={600}
                    alt="Images"
                    className="rounded-xl"
                />
            </SwiperSlide>
        </Swiper>
    </div>
}