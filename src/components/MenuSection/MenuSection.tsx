import MenuContents from "../MenuContents/MenuContents";
import MenuTitle from "../MenuTitle/MenuTitle";

interface MenuSectionProps {
    name:string;
}

export default function MenuSection ({name}:MenuSectionProps) {

    return(
        <section className="w-full flex  flex-col justify-center  gap-10">
            <MenuTitle name={name} />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />
            <MenuContents />

        </section>
    )
}