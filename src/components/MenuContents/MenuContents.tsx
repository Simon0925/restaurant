import img from "./img/SpicyTunaMaki.avif"

export default function MenuContents () {

    return(
       <div className="flex w-full flex-col sm:flex-row items-center gap-6">
            <img className="w-full h-full rounded-xl sm:w-[150px] sm:h-[100px]" src={img} />
            <div className="w-full flex flex-col gap-2">
                <div className="text-default w-full flex gap-4">
                    <p className="whitespace-nowrap">SPICY TUNA MAKI</p>
                    <span className="border-b-[1px] w-full border-dashed border-borderCustom mb-1.5"></span>
                    <p className="">£5</p>
                </div>
                <p className="text-[#B0AEA7] text-sm">
                    A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.
                </p>
            </div>
       </div>
    )
}