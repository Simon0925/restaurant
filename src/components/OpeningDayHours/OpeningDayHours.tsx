interface OpeningDayHoursProps {
    day:string
}

const OpeningDayHours = ({day}:OpeningDayHoursProps) => {
    return(
    <li className="w-full flex gap-4 place-items-baseline">
        <strong className="font-HeaderTitle font-thin"
        style={{ whiteSpace: 'nowrap' }}>{day}</strong>
        <div className="border-dashed  border-b-[#504E4A] border-b w-full"></div>
        <span className="flex font-thin flex-nowrap">
            <time>16:00</time> - <time>22:30</time>
        </span>
    </li>
    )
}

export default OpeningDayHours