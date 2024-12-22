import { useState } from "react";
import ArrowVectorSVG from "../../svg/ArrowVectorSVG";
import defaultImage from '../../assets/default_image.png';

interface SliderProps {
  data: { src: string }[];
}

export default function Slider({ data }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((e, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full  flex items-center justify-center"
          >
            <img
              className="h-full w-full object-cover"
              src={e.src || defaultImage}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full px-4 z-10">
        {currentIndex !== 0 ? (
          <button
            className="flex items-center justify-center w-8 h-8 p-2 bg-black/45 rounded-2xl rotate-180"
            onClick={prevSlide}
          >
            <ArrowVectorSVG />
          </button>
        ) : (
          <span></span>
        )}
        {currentIndex !== data.length - 1 ? (
          <button
            className="flex items-center justify-center w-8 h-8 p-2 bg-black/45 rounded-2xl"
            onClick={nextSlide}
          >
            <ArrowVectorSVG />
          </button>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
