interface ButtonNavMenuListProps {
    name: string;
    onClick:()=>void;
  }
  
  export default function ButtonNavMenuList({ name,onClick }: ButtonNavMenuListProps) {
    return (
      <button onClick={onClick} className="border-2 rounded-lg text-[12px]  border-borderCustom duration-500 hover:border-borderCustomHover py-1 px-4 text-default">
        {name}
      </button>
    );
  }
  