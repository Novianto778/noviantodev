'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import programmingTech from '@/data/programming';

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
    return (
        <div className="mt-12">
            <Slider {...settings} className="overflow-hidden">
                {programmingTech.map((tech, index) => {
                    console.log(tech.icon);

                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <img
                                src={tech.icon.src}
                                alt={tech.name}
                                className="h-12 w-12"
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default TechSlider;
