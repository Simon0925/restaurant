import HeaderTitle from "../HeaderTitle/HeaderTitle"
import OpeningDayHours from "../OpeningDayHours/OpeningDayHours"

 
 
 const OpeningHours = () =>{
    return(
        <section className="
          text-default
            flex 
            flex-col
            border-[#504E4A]
            border 
            rounded-2xl 
            w-full
            p-8
            justify-center
            text-center
            gap-3
            ">
            <h4 className="w-full flex justify-center">
                <HeaderTitle name={"Opening Hours"} fontSize={"2xl"} smFontSize={"xl"} />  
            </h4>
            <ul className="w-full grid grid-row-6 gap-3">
               <OpeningDayHours day={"Mon"} />
               <OpeningDayHours day={"Tue"} />
               <OpeningDayHours day={"Wed"} />
               <OpeningDayHours day={"Thu"} />
               <OpeningDayHours day={"Fri"} />
               <OpeningDayHours day={"Sat & Sun"} />
            </ul>  
        </section>
    )
}

export default OpeningHours