import { useState } from "react";

export default function BurgerMenu() {
  const [onHover, setHover] = useState(false);

  const move = () => {
    setHover(!onHover);
  };
  
  return (
    <div
      onMouseEnter={move}
      onMouseLeave={move}
      className={`w-10 h-10 border-2  rounded-lg relative flex flex-col items-center p-1 cursor-pointer transition-all duration-300
        ${
            onHover ? "bg-[#1E1E1E] border-[#504E4A]" :"border-borderCustom"
        }
      `}
    >
      <span
        className={`w-5 h-[1px] absolute bg-default transition-all duration-300 ${
          onHover ? "top-[18px]" : "top-[11px]"
        }`}
      ></span>
      <span
        className="w-5 h-[1px] absolute top-[18px] bg-default transition-all duration-300"
      ></span>
      <span
        className={`w-5 h-[1px] absolute bg-default transition-all duration-300 ${
          onHover ? "top-[18px]" : "top-[25px]"
        }`}
      ></span>
    </div>
  );
}
