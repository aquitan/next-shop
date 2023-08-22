import Image from "next/image";
import Link from "next/link";
import styles from './Socials.module.scss'

const Socials = () => {
    return (
        <div className={styles.socials}>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/vk.svg' alt='vk' width={30} height={30} />
            </Link>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/ok.svg' alt='ok' width={30} height={23} />
            </Link>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/yt.svg' alt='yt' width={30} height={30} />
            </Link>
        </div>
    )
}

export default Socials;