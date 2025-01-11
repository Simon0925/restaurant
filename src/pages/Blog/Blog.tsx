import BannerContent from "../../components/BannerContent/BannerContent";
import Footer from "../../components/Footer/Footer";
import LatestNews from "../../components/LatestNews/LatestNews";

import img from './header-blog-background.webp'

import getData from './services/getData'

export default function Blog () {



    return(
        <>
         <section className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
                <BannerContent name={"Blog"} src={img}/>
        </section>
        
        <section className="w-full  h-full flex flex-col gap-6 p-3  xl:py-6 xl:pl-0 xl:pr-6 xl:overflow-y-scroll"  >
            <LatestNews data={getData}/>
            <div className="pb-2 xl:pb-0">
                <Footer />
            </div>
        </section>
        </>
    )
}