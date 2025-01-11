import { useState } from "react";
import InstagramSVG from "../../svg/InstagramSVG";

interface CollageImgProps {
    src: string;
}

const CollageImg = ({ src }: CollageImgProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="aspect-square rounded-2xl overflow-hidden relative cursor-pointer"
        >
            <img
                className={`rounded-2xl transition-transform duration-300 object-cover w-full h-full ${
                    isHovered ? 'scale-125' : 'scale-100'
                }`}
                src={src}
                alt="Collage-img"
            />
            <span
                className={`absolute w-full h-full top-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <InstagramSVG w="30px" h="30px" />
            </span>
        </a>
    );
};

export default CollageImg;
