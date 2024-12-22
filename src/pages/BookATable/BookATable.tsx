import BookATableForm from "../../components/BookATableForm/BookATableForm";
import Footer from "../../components/Footer/Footer";
import MenuTitle from "../../components/MenuTitle/MenuTitle";


export default function BookATable () {
    return(
        <div className="w-full h-full justify-between  py-6   flex flex-col  px-3 xl:pr-6  xl:pl-0">
            <section className="border rounded-2xl  border-[#504E4A] p-6 sm:pb-40 sm:p-16 flex flex-col gap-16" >
                <div className="flex flex-col gap-4">
                    <MenuTitle name={"Reservation"} />
                    <p className="text-[#B0AEA7] text-center text-[18px] px-0 sm:px-6">Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.</p>
                </div>
                <BookATableForm />
            </section>
            <Footer />
       </div>
    )
}