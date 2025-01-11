import NavigateModalIcon from "../../UI/NavigateModalIcon/NavigateModalIcon";
import normalizeDate from "../../services/normalizeDate";
import HeaderTitle from "../HeaderTitle/HeaderTitle"
import styles from './BlogPostContent.module.scss'

interface BlogPostContentProps {
    header:string;
    date:string;
    content:string;
}


export default function BlogPostContent ({header,date,content}:BlogPostContentProps) {

    const normalDate = normalizeDate(date)

    return(
        
        <article className="w-full gap-10 rounded-xl border-2 p-8 border-borderCustom flex flex-col sm:p-16">
            <header className="flex flex-col gap-4">
                <div className="w-full flex justify-center">
                    <HeaderTitle name={normalDate} fontSize="sm" smFontSize="sm" />
                </div>
                <h1 className="w-full text-6xl text-center text-default flex justify-center">
                    {header}
                </h1>
                <div className="w-full flex justify-center">
                    <NavigateModalIcon />
                </div>
            </header>
            <section 
                className={`${styles['content']}`} 
                dangerouslySetInnerHTML={{ __html: content }} 
            >
            </section>
        </article>
        
    )
}