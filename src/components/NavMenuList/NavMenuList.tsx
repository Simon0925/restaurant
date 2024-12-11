import ButtonNavMenuList from "../../UI/ButtonNavMenuList /ButtonNavMenuList";




export default function NavMenuList () {
    return(
        <div className="w-full flex justify-center gap-2">
            <ButtonNavMenuList name={"MAKI"} />
            <ButtonNavMenuList name={"URAMAKI"} />
            <ButtonNavMenuList name={"SPECIAL ROLLS"} />
        </div>
    )
}