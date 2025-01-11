import BannerContent from "../../components/BannerContent/BannerContent";
import Collage from "../../components/Collage/Collage";
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import OpeningHours from "../../components/OpeningHours/OpeningHours";

import img from './header-contact-background.webp'


export default function Contact () {
    return(
        <>
        <section className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
            <BannerContent name={"Contact"} src={img}/>
        </section>
        <section className="w-full h-full justify-between  py-6   flex flex-col  px-3 xl:pr-6  xl:pl-0">
            <div className="grid grid-cols-2 gap-4 w-full">
                <OpeningHours />
                <Collage />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                <GetInTouch />
            </div>
            <Footer />
       </section>
    </>
    )
}
