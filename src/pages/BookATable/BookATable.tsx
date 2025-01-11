import BannerContent from "../../components/BannerContent/BannerContent";
import BookATableForm from "../../components/BookATableForm/BookATableForm";
import Footer from "../../components/Footer/Footer";
import MenuTitle from "../../components/HeaderTitle/HeaderTitle";

import img from './header-reservation-background.webp'

export default function BookATable () {
    return(
        <>
      
        <section className="w-full p-3  h-[60%]  md:h-full xl:p-6 relative">
            <BannerContent name={"Book a table"} src={img}/>
        </section>
        <div className="w-full h-full justify-between  py-6   flex flex-col  px-3 xl:pr-6  xl:pl-0">
            <section className="border rounded-2xl  border-[#504E4A] p-6 sm:pb-40 sm:p-16 flex flex-col gap-16" >
                <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-center">
                        <MenuTitle name={"Reservation"} fontSize={"xl"} smFontSize={"3xl"} />
                    </div>
                    <p className="text-[#B0AEA7] text-center text-[18px] px-0 sm:px-6">Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.</p>
                </div>
                <BookATableForm />
            </section>
            <Footer />
       </div>
       </>
    )
}