'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TECH, { arrayOfTech } from '@/data/programming';
import Image from 'next/image';

type Props = {};

const TechSlider = (props: Props) => {
    const settings = {
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // const arrayOfTech = Object.values(TECH);
    // console.log(arrayOfTech);
    // make arrayOfTech to array of object with key and value

    return (
        <div className="mt-12 2xl:mt-0">
            <Slider {...settings} className="overflow-hidden">
                {arrayOfTech.map((tech, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                className="h-12 w-12"
                                width={48}
                                height={48}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default TechSlider;
