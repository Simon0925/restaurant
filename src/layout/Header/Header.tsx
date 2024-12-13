import { useState } from 'react';
import images from '../../assets/header/header-menu-background.webp'; 
import NavigatePanel from '../../components/NavigatePanel/NavigatePanel';

export default function Header() {
    const [currentPage,setCurrentPage] = useState("menu")

    return (
        <header className="w-full rounded-2xl h-full relative">
            <img
                className="rounded-2xl w-full object-contain md:object-cover h-full"
                src={images}
                alt="Header Menu Background"
            />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <NavigatePanel />
            </div>
            <p className="text-default font-pageName text-5xl sm:text-6xl md:text-7xl xl:text-8xl absolute bottom-8 left-1/2 transform -translate-x-1/2 xl:left-48"> 
                {currentPage.toUpperCase()}
            </p>
        </header>
    );
}
