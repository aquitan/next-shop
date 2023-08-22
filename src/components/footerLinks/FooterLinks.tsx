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
        <>
            {
                links.map((link: LinkItem) => (
                    <Link className={styles.links} key={link.label} href={link.href}>{link.label}</Link>
                ))
            }
        </>
    )
}

export default FooterLinks;