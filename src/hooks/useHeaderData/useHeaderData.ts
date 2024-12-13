import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import {headerData} from './services/headerData'


export const useHeaderData = () =>{

    const [currentData,setCurrentData] = useState({
        name:"",
        media:''
    })

    const location = useLocation();

    useEffect(()=>{
        const path = location.pathname
        headerData.map((e)=>{
            if(path === e.path){
                setCurrentData({
                    name:e.name,
                    media:e.media 
                })
            }
        })
        
    },[location])


    return {
        currentData
    }

}