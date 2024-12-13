import { useState } from "react";

interface BurgerMenuOpenProps {
  onClick:(e:boolean) => void
}


export default function BurgerMenuOpen({onClick}:BurgerMenuOpenProps) {
  const [onHover, setHover] = useState(false);

  const move = () => {
    setHover(!onHover);
  };
  
  return (
    <div
      onClick={()=>onClick(true)}
      onMouseEnter={move}
      onMouseLeave={move}
      className={`w-[41px] h-[41px] border-[1px]  rounded-lg  flex flex-col items-center justify-center p-1 cursor-pointer transition-all duration-300
        ${
            onHover ? "bg-[#1E1E1E] border-[#504E4A]" :"border-borderCustom"
        }
      `}
    >
      <div className="relative w-[20px] h-[15px] ">
        <span
          className={`w-5 h-[1px] absolute bg-default transition-all duration-300 ${
            onHover ? "top-[50%]" : "top-0"
          }`}
        ></span>
        <span
          className="w-5 h-[1px] absolute top-[50%] bg-default transition-all duration-300"
        ></span>
        <span
          className={`w-5 h-[1px] absolute bg-default transition-all duration-300 ${
            onHover ? "top-[50%]" : "top-[100%]"
          }`}
        ></span>
      </div>
    </div>
  );
}
