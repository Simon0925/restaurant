import MenuContents from "../MenuContents/MenuContents";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

interface MenuSectionProps {
    name:string;
}

export default function MenuSection ({name}:MenuSectionProps) {

    return(
        <section className="w-full flex  flex-col justify-center  gap-14">
            <h4 className="w-full flex justify-center">
                <HeaderTitle name={name.toUpperCase()} fontSize={"3xl"} smFontSize={"xl"} />
            </h4>
            <div className="w-full flex  flex-col justify-center  gap-10">
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
                <MenuContents />
            </div>
        </section>
    )
}