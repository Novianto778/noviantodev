'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import { useDraggable } from 'react-use-draggable-scroll';

type Props = {
    images: string[];
};

const ProjectImagePreview = ({ images }: Props) => {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <div
                className="flex gap-8 overflow-x-auto no-scrollbar"
                {...events}
                ref={ref}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-[400px] relative aspect-[16/9]"
                    >
                        <Image
                            src={image}
                            fill
                            alt="project"
                            className="border border-primary bg-cover object-cover rounded cursor-pointer w-full"
                            onClick={() => {
                                setIsOpen(true);
                                setPhotoIndex(index);
                            }}
                        />
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={
                                    images[(photoIndex + 1) % images.length]
                                }
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
                                    setPhotoIndex(
                                        (photoIndex + 1) % images.length
                                    )
                                }
                            />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectImagePreview;
