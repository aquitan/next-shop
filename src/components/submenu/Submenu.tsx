import Link from "next/link";
import styles from './Submenu.module.scss'
import classNames from "classnames/bind";

type SubmenuProps = {
	label: string,
	value: string
}

const Submenu = ({ submenu, active }: any) => {
	const cx = classNames.bind(styles)


	return (
		<div className={cx(styles.submenu, { [styles.active]: active })}>
			{
				submenu.map((item: SubmenuProps) => (
					<Link key={item.value} className={styles.item} href={`/catalog/${item.value}`}>{item.label}</Link>
				))
			}
		</div>
	)
}

export default Submenu;