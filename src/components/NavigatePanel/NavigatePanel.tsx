import { NavLink } from "react-router";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";
import BurgerMenuSVG from "../../svg/BurgerMenuSVG/BurgerMenuSVG";

export default function NavigatePanel () {

    return(
        <div className="bg-[#0a0b0a] w-max rounded-xl flex items-center gap-3 p-2">
            <BurgerMenu />
            <NavLink
                to={"/"}
                className="text-default font-logo text-3xl cursor-pointer"
            >
                Kitchen
             </NavLink>
            <nav className="flex gap-1 items-center">
                <div className="hidden md:block">
                    <NavLink
                        to={"menu"}
                        className={
                            'text-default border-2 border-[#0a0b0a] rounded-lg text-sm px-3 py-2 hover:border-borderCustom hover:bg-[#111111]'
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to={"about"}
                        className={
                            'text-default border-2 border-[#0a0b0a] rounded-lg text-sm px-3 py-2 hover:border-borderCustom hover:bg-[#111111]'
                        }
                    >
                        About
                    </NavLink>
                </div>
                <NavLink to={"book"} className={'text-default rounded-lg bg-[#111111] text-sm px-3 py-2 border-borderCustom border-2'}>Book A Table</NavLink>

            </nav>
        </div>
    )
}