import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/image/banner2.jpg'} alt='cover' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 >where every event finds its venue</h1>
                
            </div>
        </div>
    )
}