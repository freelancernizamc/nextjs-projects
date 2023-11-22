"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';
import React from 'react';
import slider1 from '../../../assets/slider1.png';
import slider2 from '../../../assets/slider2.png';
import slider3 from '../../../assets/slider3.png';
import slider4 from '../../../assets/slider4.jpg';
import slider5 from '../../../assets/slider5.jpg';
import slider6 from '../../../assets/slider6.png';
import { Carousel } from 'react-responsive-carousel';
// const React = require('react');


const Slider = () => {
    return (
        <Carousel >
            <div>
                <Image src={slider1} alt='Slider1' />
                <p className="legend">Project Name: The School of Mindfulness</p>
            </div>
            <div>
                <Image src={slider2} alt='Slider2' />
                <p className="legend">Project Name: Toy Cars Bliss</p>
            </div>
            <div>
                <Image src={slider3} alt='Slider3' />
                <p className="legend">Project Name: Best Chef Recipe</p>
            </div>
            <div>
                <Image src={slider4} alt='Slider4' />
                <p className="legend">Project Name: StudyCamp</p>
            </div>
            <div>
                <Image src={slider5} alt='Slider5' />
                <p className="legend">Project Name: Bistro Boss Resraurant</p>
            </div>
            <div>
                <Image src={slider6} alt='Slider6' />
                <p className="legend">Project Name: WeatherCast</p>
            </div>
        </Carousel>
    );
};

export default Slider;