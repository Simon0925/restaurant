import StarSVG from "../../svg/StarSVG";

interface RatingBox {
    title:string;
    description:string;
}


export default function RatingBox({title,description}:RatingBox) {
    return(
        <div className="border-[#333330] border items-center text-center  rounded-2xl p-7 flex flex-col gap-1">
            <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                        <StarSVG />
                    </span>
                ))}
            </div>
            <h3 className="text-default text-2xl w-full ">{title}</h3>
            <p className="text-[#B0AEA7] ">{description}</p>
        </div>
    )
}