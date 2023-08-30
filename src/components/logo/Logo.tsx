import Link from "next/link"
import Cargosil from './cargosil-logo.svg'
import styles from './Logo.module.css'
import classNames from "classnames/bind"

type LogoProps = {
    color?: string
}

export const Logo = ({ color = 'dark' }: LogoProps): JSX.Element => {
    const cx = classNames.bind(styles)

    return (
        <Link className={cx(styles.link, { [styles.light]: color === 'light' })} href='/'>
            {/* <Image src='/elastomeric-cargosil.svg' alt='Логотип Cargosil' width={100} height={50} /> */}
            <Cargosil className={styles.logo} />
        </Link>
    )
}