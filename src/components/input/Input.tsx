import { InputProps } from "./Input.props"
import styles from './Input.module.scss'
import classNames from "classnames/bind"

export const Input = ({ type, placeholder, name, htmlFor, className }: InputProps) => {
	const cx = classNames.bind(styles)
	const classnames = cx(styles.input, className)


	return (
		<label className={styles.label} htmlFor={htmlFor}>
			<input className={classnames} id={htmlFor} type={type} placeholder={placeholder} name={name} />
		</label>
	)
}