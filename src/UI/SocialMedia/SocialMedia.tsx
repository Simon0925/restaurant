import FacebookSVG from "../../svg/FacebookSVG";
import InstagramSVG from "../../svg/InstagramSVG";
import LinkedinSVG from "../../svg/LinkedinSVG";



export default function SocialMedia () {
    return(
        <div className="h-full w-full flex flex-row gap-2 bottom-0 ">
              <div className="w-[36px] h-[36px] border-[1px]
                        border-borderCustom rounded-3xl 
                        cursor-pointer flex items-center justify-center
                        hover:border-[#504E4A]
                    ">
                        <InstagramSVG />
                    </div>
                    <div className="w-[36px] h-[36px] border-[1px]
                        border-borderCustom rounded-3xl 
                        cursor-pointer flex items-center justify-center
                        hover:border-[#504E4A]
                    ">
                        <FacebookSVG />
                    </div>
                    <div className="w-[36px] h-[36px] border-[1px]
                        border-borderCustom rounded-3xl 
                        cursor-pointer flex items-center justify-center
                        hover:border-[#504E4A]
                    ">
                        <LinkedinSVG />
                    </div>
        </div>
    )
}