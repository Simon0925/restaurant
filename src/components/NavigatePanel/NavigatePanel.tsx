import { NavLink } from "react-router";

export default function NavigatePanel () {

    return(
        <div className="bg-[#0a0b0a] w-max rounded-xl flex items-center  p-2">
            <nav className="flex gap-4 items-center">
                <NavLink to={"/"} className={'text-default text-sm'}>Home</NavLink>
                <NavLink
                    to={"menu"}
                    className={
                        'text-default border-2 border-[#0a0b0a] rounded-lg text-sm px-3 py-2 hover:border-borderCustom hover:bg-[#111111]'
                    }
                >
                    Menu
                </NavLink>
                <NavLink to={"about"} className={'text-default text-sm'}>About</NavLink>
                <NavLink to={"book"} className={'text-default rounded-lg bg-[#111111] text-sm px-3 py-2 border-borderCustom border-2'}>Book A Table</NavLink>

            </nav>
        </div>
    )
}