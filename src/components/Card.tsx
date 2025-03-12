import styles from './card.module.css'
import Image from 'next/image'



export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
    return(
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white">
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image src={imgSrc} alt={venueName}  objectFit="cover" fill={true} className='object-cover rounded-t-lg' />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold text-gray-900">{venueName}</h1>
      </div>
    </div>
    )
}