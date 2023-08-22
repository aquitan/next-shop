import { PProps } from "./PTag.props"
import classNames from "classnames/bind"
import styles from './PTag.module.css'

export const PTag = ({ children, size = 'm' }: PProps) => {
	const cs = classNames.bind(styles)
	const classnames = cs('p', size)


	return (
		<p className={classnames}>{children}</p>
	)
}