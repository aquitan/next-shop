import Link from "next/link"
import styles from './FooterLinks.module.scss'

type Props = {
    links: LinkItem[]
}

type LinkItem = {
    label: string,
    href: string
}

const FooterLinks = ({ links }: Props) => {
    return (
        <div className={styles.links}>
            {
                links.map((link: LinkItem) => (
                    <Link className={styles.link} key={link.label} href={link.href}>{link.label}</Link>
                ))
            }
        </div>
    )
}

export default FooterLinks;