import { NavLink } from "react-router";

export default function NavigatePanel () {

    return(
        <div className="bg-[#0a0b0a] flex items-center w-80 p-4">
            <nav className="flex gap-4">
                <NavLink key={"/"} to={"home"} className={'text-default text-sm'}> Home  </NavLink>
                <NavLink key={"/menu"} to={"menu"} className={'text-default text-sm'}>Menu </NavLink>
            </nav>
        </div>
    )
}