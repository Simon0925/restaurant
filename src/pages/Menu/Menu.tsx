import Footer from "../../components/Footer/Footer";
import MenuList from "../../components/MenuList/MenuList";




export default function Menu () {
    return(
        <div className="w-full rounded-2xl p-6 h-full  flex flex-col gap-6 xl:py-6 xl:overflow-y-scroll  xl:pr-6">
            <MenuList />
            <Footer />
        </div>
    )
}