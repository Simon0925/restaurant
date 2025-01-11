import BlogTopic from "../BlogTopic/BlogTopic";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

interface Data {
    src:string;
    date:string;
    header:string;
    description:string;
    id:string;
}


interface LatestNewsProps {
    data:Data[]
}

export default function LatestNews ({data}:LatestNewsProps) {

 
    return(
        <section className="w-full">
            <div className="w-full gap-10 rounded-xl border-2 p-8 border-borderCustom flex flex-col sm:p-16">
                <h4 className="w-full flex justify-center">
                    <HeaderTitle name={'Latest News'} fontSize={"xl"} smFontSize={"3xl"} />
                </h4>
                <ul className="flex flex-col gap-10">
                    {data.map((b)=>(
                        <BlogTopic key={b.id} src={b.src} date={b.date} header={b.header} description={b.description} />
                    ))}     
                </ul>           
            </div>
        </section>
    )
}




