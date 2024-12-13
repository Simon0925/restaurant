import Footer from "../../components/Footer/Footer";
import MenuList from "../../components/MenuList/MenuList";

export default function Menu() {
    return (
    <div className="w-full xl:w-[44em] h-full flex flex-col gap-6 p-3  xl:py-6 xl:pl-0 xl:pr-6 xl:overflow-y-scroll">
            <MenuList />
            <div className="pb-2 xl:pb-0">
                <Footer />
            </div>
        </div>
    );
}
