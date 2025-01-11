import FacebookSVG from "../../svg/FacebookSVG";
import InstagramSVG from "../../svg/InstagramSVG";
import LinkedinSVG from "../../svg/LinkedinSVG";
import HeaderTitle from "../HeaderTitle/HeaderTitle";





export default function GetInTouch () {
    return(
        <section aria-labelledby="get-in-touch-title" className="
        flex
        flex-col
        text-default 
        border-[#504E4A]
        border 
        rounded-2xl 
        w-full
        p-8
        justify-center
        text-center
        gap-5
        ">
            <h4 className="w-full flex justify-center">
                <HeaderTitle name={"Get in touch"} fontSize={"2xl"} smFontSize={"xl"} />  
            </h4>

            <ul className="w-full grid grid-row-4 gap-3">
                <li className="w-full flex gap-4 place-items-baseline font-HeaderTitle font-thin justify-between "> 
                    <h4>Address</h4>  
                    <address>
                        23 Greenfield Avenue,<br/>
                        Prague 120 00
                     </address>
                </li>
                <li className="w-full flex gap-4 place-items-baseline font-HeaderTitle font-thin justify-between ">
                    <h4>Phone</h4>
                    <a href="tel:+421234567890" ria-label="Call us at +42 1234 567890">+42 1234 567890</a>
                </li>
                <li className="w-full flex gap-4 place-items-baseline font-HeaderTitle font-thin justify-between ">
                    <h4>Email</h4>
                    <a href="mailto:info@qitchen.com">info@qitchen.com</a>
                </li>
                <li className="w-full flex gap-4 place-items-baseline font-HeaderTitle font-thin justify-between ">
                <h4>Follow</h4>
                <span className="flex gap-3">
                    <InstagramSVG w={"18px"} h={"18px"} />
                    <FacebookSVG />
                    <LinkedinSVG />
                </span>
                </li>
            </ul>
        </section>
    )
}