import Footer from "../../components/Footer/Footer";
import MenuList from "../../components/MenuList/MenuList";




export default function Menu () {
    return(
        <div className="w-full h-full flex flex-col gap-6 p-2  xl:p-0 xl:py-6 xl:pr-6 xl:overflow-y-scroll">
            <MenuList />
            <Footer />
        </div>
    )
}