import { NavLink } from "react-router";
import NavigateModal from "../NavigateModal/NavigateModal";
import { useState } from "react";
import ReactDOM from "react-dom";
import BurgerMenuOpen from "../../UI/BurgerMenuOpen/BurgerMenuOpen";

export default function NavigatePanel () {

    const modalRoot = document.getElementById("modal-root");

    const [modalVisible, setModalVisible] = useState(false)
    
    return(
        <>
        <div className="bg-[#0a0b0a] w-max rounded-xl flex items-center gap-3 p-2">
            <BurgerMenuOpen onClick={setModalVisible} />
            <NavLink
                to={"/"}
                className="text-default font-logo text-3xl cursor-pointer"
            >
                Kitchen
             </NavLink>
            <nav className="flex gap-1 items-center">
                <div className="hidden md:block">
                    <NavLink
                        to={"/menu"}
                        className={
                            'text-default border-2 border-[#0a0b0a] rounded-lg text-sm px-3 py-2 hover:border-borderCustom hover:bg-[#111111]'
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to={"/about"}
                        className={
                            'text-default border-2 border-[#0a0b0a] rounded-lg text-sm px-3 py-2 hover:border-borderCustom hover:bg-[#111111]'
                        }
                    >
                        About
                    </NavLink>
                </div>
                <NavLink to={"/reservation"} className={'text-default rounded-lg bg-[#111111] text-sm px-3 py-2 border-borderCustom border-[1px]'}>Book A Table</NavLink>

            </nav>
        </div>
        {modalVisible && modalRoot &&
            ReactDOM.createPortal(                   
            <NavigateModal onClick={setModalVisible}   />,
            modalRoot
        )}
        </>
    )
}