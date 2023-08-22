import Image from "next/image"
import Link from "next/link"

export const Logo = (): JSX.Element => {
    return (
        <Link href='/'>
            <Image src='/elastomeric-cargosil.svg' alt='Логотип Cargosil' width={100} height={50} />
        </Link>
    )
}