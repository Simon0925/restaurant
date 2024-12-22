import RatingBox from "../RatingBox/RatingBox";




export default function Rating() {
    return(
        <section className="w-full grid grid-rows-1 md:grid-cols-3 gap-6">
           
            <RatingBox title={"Trip Advisor"} description={"Best Sushi"} />
           
            <RatingBox title={"Michelin Guide"} description={"Quality Food"} />

          
            <RatingBox title={"Start Dining"} description={"Cool vibe"} />
            
        </section>
    )
}