import MenuListIcon from "../../UI/MenuListIcon/MenuListIcon";


interface MenuTitleProps {
    name:string;
}

export default function MenuTitle ({name}:MenuTitleProps) {

    return(
        <section className="w-full flex justify-center ">
            <div className=" flex gap-4">
                <MenuListIcon side={false} />
                <p className="text-default text-3xl">{name}</p>
                <MenuListIcon side={true} />
            </div>
        </section>
    )
}