import Link from 'next/link';
import { Logo } from '../logo/Logo';
import styles from './Footer.module.scss'
import FooterLinks from '../footerLinks/FooterLinks';
import Subscribe from '../subscribe/Subscribe';
import Socials from '../socials/Socials';

const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'О Компании', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
]


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <FooterLinks links={navLinks} />
                        <div className={styles.address}>
                            Липецкая область, г.Липецк, Лебедянское шоссе, 3А
                        </div>
                    </div>

                    <div className={styles.col}>
                        {/* <Subscribe /> */}
                        <div className={styles.contacts}>
                            <div>8-800-775-61-05</div>
                            <div>Пн - Пт 8:00 - 17:00 Сб - Вс Выходной</div>
                        </div>
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;