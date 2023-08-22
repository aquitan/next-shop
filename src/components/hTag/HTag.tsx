import { HProps } from "./HTag.props"
import styles from './Htag.module.scss'
import classNames from "classnames/bind"

export const HTag = ({ tag = 'h2', children, align = 'left' }: HProps) => {
	const cs = classNames.bind(styles)
	const classnames = cs(tag, align)

	const Tag = tag

	return (
		<Tag className={classnames}>{children}</Tag>
	)
}