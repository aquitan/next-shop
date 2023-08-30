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
                        <Logo color='light' />
                        <div className={styles.address}>
                            Липецкая область, г.Липецк, Лебедянское шоссе, 3А
                        </div>
                    </div>

                    <div className={styles.col}>
                        <FooterLinks links={navLinks} />
                    </div>

                    <div>
                        <Subscribe />
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;