'use client';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

import FirstImage from '@/images/services/01_Startseite 1. Bild.webp';
import SecondImage from '@/images/services/02_Startseite 2. Bild.webp';
import Logo from '@/images/Bauvision_logo.svg';

interface ImageData {
    src: StaticImageData;
}

const images: ImageData[] = [
    {
        src: FirstImage,
    },
    {
        src: SecondImage,
    },
    {
        src: Logo,
    }
]

export default function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div className='relative w-[650] h-[600]'>
        <Image
            src={images[currentIndex].src}
            layout='fill'
            alt="Images"
            objectFit='cover'
            className="rounded-xl"
        />
    </div>
}