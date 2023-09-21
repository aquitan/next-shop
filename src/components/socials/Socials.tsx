import Image from "next/image";
import Link from "next/link";
import styles from './Socials.module.scss'

const Socials = () => {
    return (
        <div className={styles.socials}>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/vk.svg' alt='vk' width={20} height={20} />
            </Link>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/ok.svg' alt='ok' width={20} height={15} />
            </Link>
            <Link href='https://vk.com/cargosil48'>
                <Image src='/yt.svg' alt='yt' width={20} height={20} />
            </Link>
        </div>
    )
}

export default Socials;