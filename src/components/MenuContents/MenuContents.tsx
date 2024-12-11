import img from "./img/SpicyTunaMaki.avif"

export default function MenuContents () {

    return(
       <div className="flex w-full items-center gap-6">
            <img className="w-[150px] h-[100px] rounded-xl" src={img} />
            <div className="w-full flex flex-col gap-2">
                <div className="text-default w-full flex gap-4">
                    <p className="whitespace-nowrap">SPICY TUNA MAKI</p>
                    <span className="border-b-[1px] w-full border-dashed border-borderCustom mb-1.5"></span>
                    <p className="">£5</p>
                </div>
                <p className="text-[#F5F2EA] text-sm">
                    A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.
                </p>
            </div>
       </div>
    )
}