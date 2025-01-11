import BannerHome from "../../components/BannerHome/BannerHome";
import Footer from "../../components/Footer/Footer";
import NavigateHome from "../../components/NavigateHome/NavigateHome";
import  video  from './video/homeVideo.mp4';

import { homeData } from "./services/homeData";


export default function Home () {
    return(
        <>
        <section className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
            <BannerHome name={'Sushi Sensation'} src={video} />
        </section>
        <div className="py-2 px-3 xl:px-0 xl:py-0">
            <nav className="flex flex-col w-full h-[900px] gap-3 
                    sm:flex-row sm:h-[334px] 
                    xl:flex-col xl:h-full xl:w-[380px] xl:px-0 xl:py-6 xl:pr-6">
                {homeData.map((e,i)=>(
                    <NavigateHome key={i} name={e.name} src={e.src} path={e.path} />
                ))}
            </nav>
            <div className="w-wull pt-3 block xl:hidden">
                <Footer />
            </div>
        </div>
        </>
    )
}