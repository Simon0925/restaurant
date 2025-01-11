import Slider from "../../components/Slider/Slider";
import {slider2Data} from './services/slider2Data'
import Rating from "../../components/Rating/Rating";
import Footer from "../../components/Footer/Footer";


import {slider1Data} from './services/slider1Data'
import MenuTitle from "../../components/HeaderTitle/HeaderTitle";
import BannerContent from "../../components/BannerContent/BannerContent";

import img from './header-about-background.webp'

export default function About() {
    
   

    return (
        <>
      
            <section className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
                <BannerContent name={"About"} src={img}/>
            </section>
            <div className="w-full  flex flex-col gap-3 py-6  px-3 xl:px-0 xl:pr-6">

                <section className="flex flex-col h-full  md:flex-row md:h-96 xl:h-64 gap-4">
                    <div className={`border-[#333330] w-full flex flex-col justify-between rounded-2xl border  p-10 xl:p-8`}>
                        <h2 className="text-default font-pageName text-[32px]">Sushi Artistry Redefined</h2>
                        <p className="text-[#B0AEA7] ">Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
                    </div>
                    <Slider data={slider1Data} />
                </section>
                <Rating />
                <section className="flex flex-col h-full  md:flex-row md:h-96 xl:h-64 gap-4">
                    <Slider data={slider2Data} />
                    <div className={`border-[#333330] w-full flex flex-col justify-between rounded-2xl border p-8`}>
                        <div className="flex w-full justify-center gap-2 ">
                            <MenuTitle name={"OUR STORY"} fontSize={"2xl"} smFontSize={"xl"} />
                        </div>
                        <p className="text-[#B0AEA7] text-[16px]">Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.</p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
