import CollageImg from '../CollageImg/CollageImg'
import {collageImgs} from './services/collageImgs'

export default function Collage () {
    return(
        <section className='w-full flex  flex-col gap-4'>
            <section className="w-full grid grid-cols-2 gap-4">
                {collageImgs.map((element,index)=>(
                        <CollageImg key={index} src={element.src} />
                ))}   
            </section>
        </section>
    )
}
