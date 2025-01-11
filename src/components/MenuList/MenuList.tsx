import React, { useEffect, useRef } from "react";
import MenuSection from "../MenuSection/MenuSection";
import NavMenuList from "../NavMenuList/NavMenuList";
import { useLocation, useNavigate } from "react-router";

export default function MenuList() {
    const navigate = useNavigate();
    const location = useLocation();

    const makiRef = useRef<HTMLDivElement | null>(null);
    const uramakiRef = useRef<HTMLDivElement | null>(null);
    const specialRollsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const hash = location.hash;
    
        if (hash === "#maki" && makiRef.current) {
            scrollToSection(makiRef, "maki");
        } else if (hash === "#urmaki" && uramakiRef.current) {
            scrollToSection(uramakiRef, "urmaki");
        } else if (hash === "#special" && specialRollsRef.current) {
            scrollToSection(specialRollsRef, "special");
        }
    }, [location.hash]); 
    

    const scrollToSection = (ref: React.MutableRefObject<HTMLElement | null>, path: string) => { 
        navigate(`/menu#${path}`);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="w-full">
            <div className="w-full rounded-xl border-2 p-8 border-borderCustom flex flex-col sm:p-16">
                <NavMenuList 
                    onScrollTo={scrollToSection} 
                    refs={{ makiRef, uramakiRef, specialRollsRef }} 
                />
                <div className="pt-14" ref={makiRef}>
                    <MenuSection name={"MAKI"} />
                </div>
                <div className="pt-14" ref={uramakiRef}>
                    <MenuSection name={"UraMaki"} />
                </div>
                <div className="pt-14" ref={specialRollsRef}>
                    <MenuSection name={"Special Rolls"} />
                </div>
            </div>
        </section>
    );
}
