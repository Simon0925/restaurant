import ButtonNavMenuList from "../../UI/ButtonNavMenuList /ButtonNavMenuList";

interface NavMenuListProps {
    onScrollTo: (ref: React.MutableRefObject<HTMLElement | null>, path: string) => void; 
    refs: {
        makiRef: React.MutableRefObject<HTMLElement | null>;
        uramakiRef: React.MutableRefObject<HTMLElement | null>;
        specialRollsRef: React.MutableRefObject<HTMLElement | null>;
    };
}

export default function NavMenuList({ onScrollTo, refs }: NavMenuListProps) {
    return (
        <div className="w-full flex justify-center gap-2">
            <ButtonNavMenuList name={"MAKI"} onClick={() => onScrollTo(refs.makiRef, "maki")} />
            <ButtonNavMenuList name={"URAMAKI"} onClick={() => onScrollTo(refs.uramakiRef, "urmaki")} />
            <ButtonNavMenuList name={"SPECIAL ROLLS"} onClick={() => onScrollTo(refs.specialRollsRef, "special")} />
        </div>
    );
}
