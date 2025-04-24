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
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };


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