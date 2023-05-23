'use client';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';

type Props = {
    images: string[];
};

const ProjectImagePreview = ({ images }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <>
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        src={image}
                        width={400}
                        height={300}
                        alt="project"
                        className="border border-primary rounded cursor-pointer"
                        onClick={() => {
                            setIsOpen(true);
                            setPhotoIndex(index);
                        }}
                    />
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={
                                images[
                                    (photoIndex + images.length - 1) %
                                        images.length
                                ]
                            }
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex(
                                    (photoIndex + images.length - 1) %
                                        images.length
                                )
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )}
                </div>
            ))}
        </>
    );
};

export default ProjectImagePreview;
