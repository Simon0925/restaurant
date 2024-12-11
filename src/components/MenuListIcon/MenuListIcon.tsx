interface MenuListIconProps{
    side:boolean;
}


const MenuListIcon = ({side}:MenuListIconProps) => {
  return (
    <div className="flex items-center">
    {
        side ?
        <>
            <div className=" bg-borderCustom w-8 h-px"></div>
            <div className=" border-borderCustom border-icon w-2 h-2 transform rotate-[-45deg]"></div>
        </>
        
        :
        <>
        <div className=" border-borderCustom border-icon w-2 h-2 transform rotate-[-45deg]"></div>
        <div className=" bg-borderCustom w-8 h-px"></div>
    </>
    }
      
    </div>
  );
};

export default MenuListIcon;
