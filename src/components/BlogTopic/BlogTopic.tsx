import { Link } from 'react-router-dom';
import normalizeDate from '../../services/normalizeDate';


interface BlogTopicProps {
    src:string;
    date:string;
    header:string;
    description:string;

}

export default function BlogTopic ({src,date,header,description}:BlogTopicProps) {

    const normalDate = normalizeDate(date)

    return(
        <li>
            <Link to={`/blog/${header.split(' ').join('-').toLocaleLowerCase()}`}>
                <article  className='w-full flex justify-between gap-10 items-center cursor-pointer' >
                    <figure className='w-[280px] overflow-hidden cursor-pointer rounded-2xl '>
                        <img  className=' hover:scale-110 rounded-2xl transition-transform duration-300' src={src} alt="Blog topic img" />
                    </figure>
                    <section className='flex w-full flex-col gap-3'>
                        <time className='text-default text-sm flex items-center gap-2 ' dateTime={date}> 
                            <div className='border-borderCustom border-icon w-2 h-2 transform rotate-[-45deg]'></div>
                            {normalDate}
                        </time>
                        <h2 className='text-default text-xl font-pageName'>{header.toLocaleUpperCase()}</h2>
                        <p className='text-[#B0AEA7] font-thin  '>
                        {description}
                        </p>
                    </section>
                </article>
            </Link>
        </li>
    )
}