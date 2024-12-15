import ArrowSVG from "../../svg/ArrowSVG";

interface HomeNavBtnProps {
    name: string;
    hover:boolean;
}

export default function HomeNavBtn({ name,hover }: HomeNavBtnProps) {

    return (
        <div className="flex bottom-0">
            <div className="w-full h-full flex items-center justify-around  gap-2">
                <p className="text-default ">{name.toLocaleUpperCase()}</p>
                <div
                    className={`w-[32px] h-[32px] border-[1px]
                       rounded-3xl 
                        cursor-pointer flex items-center justify-center
                        transition-all duration-300
                        overflow-hidden relative
                        ${hover ?'border-[#504E4A] bg-[#1E1E1E]':' border-borderCustom '}
                    `}
                >
                    <div
                        className="relative w-[32px] h-full flex items-center justify-center overflow-hidden"
                    >
                      
                        <div className={`absolute w-[32px] h-full flex items-center justify-center transform transition-transform duration-300 ${
                            hover?'translate-x-[32px] ':'translate-x-0 '
                        }`}>
                            <ArrowSVG />
                        </div>

                        
                        <div className={`absolute w-[32px] h-full flex  items-center justify-center transform transition-transform duration-300 
                            ${!hover?'-translate-x-[32px]':'translate-x-0'}
                            `}>
                            <ArrowSVG />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}