import MenuListSection from "../MenuListSection/MenuListSection";
import NavMenuList from "../NavMenuList/NavMenuList";




export default function MenuList () {
    return(
        <div className="w-full rounded-xl border-2 p-16 my-6 border-borderCustom flex flex-col gap-16">
            <NavMenuList />
            <MenuListSection name={"MAKI"} />
        </div>
    )
}