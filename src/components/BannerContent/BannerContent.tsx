import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import styles from './BannerContent.module.scss';
import defaulImage from '../../assets/default_image.png'

interface BannerContentProps {
    name: string;
    src: string;
}

export default function BannerContent({ name, src }: BannerContentProps) {
    
    const [show, setShow] = useState(false);

    const nodeRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        setShow(true);
    }, []);

   
    const words = name.split(' ');
    const firstLine = words[0]; 
    const secondLine = words.slice(1).join(' '); 

    return (
        <div className="w-full h-full relative">
            <div
                className={`rounded-xl w-full absolute bottom-0 h-full opacity-50 z-10`}
                style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.024269082633053274) 70%, rgba(0,0,0,1) 100%)"
                }}
                ></div>
            <img
                className="rounded-xl xl:rounded-2xl w-full absolute object-cover md:object-cover h-full"
                src={src || defaulImage}
                alt="Header Menu Background"
            />
             <Transition
                in={show} 
                timeout={1000}
                unmountOnExit
                nodeRef={nodeRef}
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
                z-20
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
