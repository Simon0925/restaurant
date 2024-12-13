interface HeaderAllPagesProps {
    name: string;
    src: string;
}

export default function HeaderAllPages({ name, src }: HeaderAllPagesProps) {
  
    const words = name.split(' ');
    const firstLine = words[0]; 
    const secondLine = words.slice(1).join(' '); 

    return (
        <div className="w-full h-full relative">
            <img
                className="rounded-2xl w-full object-contain md:object-cover h-full"
                src={src}
                alt="Header Menu Background"
            />

            <span className="text-default w-[450px] font-pageName text-5xl sm:text-6xl md:text-7xl xl:text-8xl absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center xl:text-left xl:left-72">
                <p className="block">{firstLine.toLocaleUpperCase()}</p>
                <p className="block">{secondLine.toLocaleUpperCase()}</p>
            </span>
        </div>
    );
}
