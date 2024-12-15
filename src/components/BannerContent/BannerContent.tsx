import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import styles from './BannerContent.module.scss';

interface BannerContentProps {
    name: string;
    src: string;
}

export default function BannerContent({ name, src }: BannerContentProps) {
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

   
    const words = name.split(' ');
    const firstLine = words[0]; 
    const secondLine = words.slice(1).join(' '); 

    return (
        <div className="w-full h-full relative">
            <img
                className="rounded-xl xl:rounded-2xl w-full absolute object-cover md:object-cover h-full"
                src={src}
                alt="Header Menu Background"
            />
             <Transition
                in={show} 
                timeout={500}
                unmountOnExit
            >
                {(state) => (
            
            <span className={`
                text-default 
                w-[450px]
                font-pageName
                text-5xl 
                sm:text-6xl 
                md:text-7xl 
                xl:text-8xl 
                absolute 
                bottom-8 
                left-1/2 
                transform 
                -translate-x-1/2 
                text-center
                xl:text-left
                xl:left-72
                ${styles.transition} ${styles[state]}
            `}>
                <p className="block">{firstLine.toLocaleUpperCase()}</p>
                <p className="block">{secondLine.toLocaleUpperCase()}</p>
            </span>
            )}
            </Transition>
        </div>
    );
}
