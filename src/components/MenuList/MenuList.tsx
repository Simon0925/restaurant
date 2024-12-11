import MenuSection from "../MenuSection/MenuSection";
import NavMenuList from "../NavMenuList/NavMenuList";




export default function MenuList () {
    return(
        <div className="w-full rounded-xl border-2 p-16  border-borderCustom flex flex-col gap-16">
            <NavMenuList />
            <MenuSection name={"MAKI"} />
        </div>
    )
}