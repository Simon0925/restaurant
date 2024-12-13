import { useState } from "react";

interface BurgerMenuCloseProps {
    onClick:(e:boolean) => void
  }
  

export default function BurgerMenuClose({onClick}:BurgerMenuCloseProps) {
  const [onHover, setHover] = useState(false);

  const move = () => {
    setHover(!onHover);
  };
  
  return (
    <div
      onMouseEnter={move}
      onMouseLeave={move}
      onClick={()=>onClick(false)}
      className={`w-[41px] h-[41px] border-[1px]  rounded-lg relative flex flex-col items-center p-1 cursor-pointer transition-all duration-300
        ${
            onHover ? "bg-[#1E1E1E] border-[#504E4A]" :"border-borderCustom"
        }
      `}
    >
       <span
          className={`w-6 h-[1px] absolute bg-default transition-all duration-300 top-[50%]  ${
            onHover ? "rotate-[-0deg]" : "rotate-[-45deg]"
          }`}
        ></span>
        <span
          className={`w-6 h-[1px] absolute bg-default transition-all duration-300 top-[50%]  ${
            onHover ? "rotate-[-180deg]" : "rotate-[-135deg]"
          }`}
        ></span>
    </div>
  );
}
