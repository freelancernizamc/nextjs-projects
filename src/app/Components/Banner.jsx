"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
    '/images/nizam.png',
    '/images/nizam3.jpg',
    '/images/nizam2.png',
    '/images/nizam4.jpg',
    '/images/nizam3.jpg',
    '/images/nizam3.JPG'
];


const Banner = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [imgUrl, setImgUrl] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setImgUrl(images[imgIndex]);
    }, [imgIndex]);

    return (
        <div className='flex justify-evenly items-center bg-gradient-to-r from-pink-800 to-green-900 shadow-2xl text-white'>
            <div>
                <h1 className='text-3xl font-bold'>Welcome to My Next.js Projects</h1>
                <h2 className='text-7xl text-teal-400 font-extrabold my-1'>I am Nizam</h2>
                <h3 className='font-bold'>A MERN Stack Web Developer</h3>
            </div>
            <div>
                <Image width={500} height={500} className='rounded-full' id='banner-img' src={imgUrl} alt='Nizam' />
            </div>
        </div>
    );
};

export default Banner;
