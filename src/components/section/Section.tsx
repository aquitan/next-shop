import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from './Section.module.scss'

type Props = {
	children: ReactNode,
	bg?: string,
	wide?: string
}

const Section = ({ children, bg, wide }: Props) => {
	const cs = classNames.bind(styles)
	const classnames = cs('container', bg, wide)

	return (
		<section className={classnames}>
			<div className={cs({ [styles.inner]: wide })}>{children}</div>
		</section>
	)
}

export default Section;