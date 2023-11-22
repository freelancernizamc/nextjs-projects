"use client"
import Banner from '../Components/Banner';
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

export const metadata = {
    title: 'About ~ Practice Next js',
    description: 'About ~ Practice Next js',
}

const AboutPage = () => {
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
        <div className='bg-gradient-to-r from-red-500 to-blue-500 shadow-2xl'>
            <Banner />
            <h1 className='text-5xl text-center text-teal-400 font-extrabold bg-zinc-950 my-5'>About Me</h1>
            <div className='container flex justify-between items-center mb-10 bg-gradient-to-r from-red-500 to-blue-500 shadow-2xl text-white'>
                <div className='ml-10'>
                    <Image width={2000} height={2000} className='rounded-3xl' id='banner-img' src={imgUrl} alt='Nizam' />
                </div>
                <div className='ml-10'>
                    Hi! I am Nizam, I am a certified Web Developer and Digital Marketer. Expert in WordPress, PHP, HTML,CSS, BOOTSTRAP, JavaScript, React,Next js, Social media marketing, Seo, Link Building. I Have been experienced over the past 2 years in web development and 3 years in Digital marketing. working with a number of clients with reliability, proficiency and 100% satisfaction. I completed long training about that from the most reliable organization in the city. my first priority is client satisfaction and Its being done successfully. I am committed to better online services for you.
                </div>

            </div>
        </div>
    );
};

export default AboutPage;