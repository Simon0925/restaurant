
import { useParams } from 'react-router-dom';
import getPostBlog from '../../services/getPostBlog'
import {BlogPostType} from '../../interface/BlogPostType'
import BannerContent from '../../components/BannerContent/BannerContent';
import Footer from '../../components/Footer/Footer';
import BlogPostContent from '../../components/BlogPostContent/BlogPostContent';



export default function BlogPost () {

    const { slug } = useParams<{ slug?: string }>();
    
    const formattedSlug = slug?.replace(/-/g, ' ');
    const matchingPost = getPostBlog.find((element: BlogPostType) => element.header.toLocaleLowerCase() === formattedSlug);


    

    return(
        <>
             <section className="w-full p-3 h-[60%]  md:h-full xl:p-6 relative">
               {matchingPost && <BannerContent name={""} src={matchingPost.src}/>} 
            </section>
            <section className="w-full  h-full flex flex-col gap-6 p-3  xl:py-6 xl:pl-0 xl:pr-6 xl:overflow-y-scroll">
                {matchingPost && <BlogPostContent content={matchingPost.content} header={matchingPost.header} date={matchingPost.date} />}
                <div className="pb-2 xl:pb-0">
                    <Footer />
                </div>
            </section>
        </>
    )
}