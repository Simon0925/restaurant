import { NavLink } from "react-router-dom";

import Polygon from "../../UI/Polygon/Polygon";
import HomeNavBtn from "../../UI/HomeNavBtn/HomeNavBtn";
import { useState } from "react";


interface NavigateHomeProps{
    name:string;
    src:string;
    path:string;
}


export default function NavigateHome ({name,src,path}:NavigateHomeProps) {

    const [hover,setHover] = useState(false)

    return(
        <NavLink
            className='h-full w-full'
            to={path}
            onMouseEnter={()=>setHover(!hover)}
            onMouseLeave={()=>setHover(!hover)}
        >
            <div className="relative w-full h-full">
                <div className={`rounded-xl bg-black w-full  h-full
                    transition-all duration-300
                    ${!hover ? 'opacity-70 ' : "opacity-1 "}
                `}>
                    <img 
                    className="rounded-xl w-full absolute object-cover h-full"
                    src={src}
                    alt="Nav Background"
                    />
                </div>
                 <Polygon w="full" h="44px" children={<HomeNavBtn name={name} hover={hover} />}/>
            </div>
        </NavLink>
    )
}