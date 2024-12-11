interface ButtonNavMenuListProps {
    name: string;
  }
  
  export default function ButtonNavMenuList({ name }: ButtonNavMenuListProps) {
    return (
      <button className="border-2 rounded-lg text-sm  border-borderCustom duration-500 hover:border-borderCustomHover py-1 px-4 text-default">
        {name}
      </button>
    );
  }
  