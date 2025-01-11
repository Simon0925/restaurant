import MenuListIcon from "../../UI/MenuListIcon/MenuListIcon";


interface MenuTitleProps {
    name:string;
    fontSize:string;
    smFontSize:string;
}

export default function HeaderTitle ({name,smFontSize,fontSize}:MenuTitleProps) {

    return(
        <section className="flex gap-4">
            <MenuListIcon side={false} />
            <h4 className={`
            text-default
             text-${smFontSize} 
             font-HeaderTitle 
             font-thin
             sm:text-${fontSize}`}>
                {name.toLocaleUpperCase()}
            </h4>
            <MenuListIcon side={true} />
        </section>
    )
}