import { TextareaProps } from "./TextArea.props"
import styles from './TextArea.module.scss'

export const TextArea = ({ name, placeholder, htmlFor }: TextareaProps) => {
	return (
		<label className={styles.label} htmlFor={htmlFor}>
			<textarea className={styles.textarea} name={name} id={htmlFor} placeholder={placeholder} />
		</label>
	)
}