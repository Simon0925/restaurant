import { NavLink } from "react-router";
import NavigateModalIcon from "../../UI/NavigateModalIcon/NavigateModalIcon";
import BurgerMenuClose from "../../UI/BurgerMenuClose/BurgerMenuClose";
import {nav} from './services/nav'

interface NavigateModalProps {
    onClick:(e:boolean) => void
}




export default function NavigateModal ({onClick}:NavigateModalProps){

   
    return(
        <div className="w-lvw h-dvh bg-[#0A0B0A] fixed top-0 left-0 z-50 p-6 ">
            <div className="bg-[#111111] w-full h-full  rounded-2xl border-[1px3] border-[#333330] flex flex-col gap-6 items-center justify-center relative">
                    <div className="absolute top-8 left-8">
                        <BurgerMenuClose onClick={onClick} />
                    </div>
                    <NavigateModalIcon />
                    {nav.map((n,i)=>(
                         <NavLink
                         onClick={()=>onClick(false)}
                         to={n.to}
                         key={i}
                         className={
                             'text-default  px-3 cursor-pointer transition-all duration-300 hover:text-[#CFBE91] font-pageName text-4xl sm:text-6xl'
                         }
                     >
                         {n.name.toLocaleUpperCase()}
                     </NavLink>
                    ))}
                   
                    <NavigateModalIcon />
                
            </div>
        </div>
    )
}