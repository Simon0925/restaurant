
import { useEffect } from 'react';
import { useBannerContent } from '../../hooks/useBannerContent/useBannerContent';
import BannerContent from '../BannerContent/BannerContent';

import NavigatePanel from '../NavigatePanel/NavigatePanel';
import BannerHome from '../BannerHome/BannerHome';
import  video  from './video/homeVideo.mp4';
interface BannerProps {
    param:string;
}

export default function Banner({param}:BannerProps) {
    
   const {currentData,setLocation} = useBannerContent()

   useEffect(()=>{
    setLocation(param)
   },[param])

    return (
        
        <div className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
             <div className="absolute z-50 top-16 left-1/2 transform -translate-x-1/2 xl:left-72  ">
                <NavigatePanel />
            </div>
            {param === '/' ? 
            <BannerHome name={currentData.name} src={video} />:
            <BannerContent name={currentData.name} src={currentData.media}/>
            }
        </div>
    );
}
