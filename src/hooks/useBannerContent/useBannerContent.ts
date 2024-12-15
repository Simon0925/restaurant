import { useEffect, useState } from "react";

import {headerData} from './services/headerData'


export const useBannerContent = () =>{

    const [currentData,setCurrentData] = useState({
        name:"",
        media:''
    })

    const [location,setLocation]  = useState('')

    useEffect(()=>{
        
        headerData.map((e)=>{
            if(location === e.path){
                setCurrentData({
                    name:e.name,
                    media:e.media 
                })
            }
        })
        
    },[location])


    return {
        setLocation,
        currentData
    }

}