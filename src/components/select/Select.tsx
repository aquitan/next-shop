import { FormEvent } from "react"
import styles from './Select.module.scss'

type SelectProps = {
	options: {
		value: string,
		label: string
	}[],
	setSelect: (value: string) => void
}

const Select = ({ options, setSelect }: SelectProps) => {

	const onChange = (value: string) => {
		setSelect(value)
	}

	return (
		<select className={styles.select} onChange={(e: FormEvent<HTMLSelectElement>) => onChange(e.currentTarget.value)}>
			{
				options.map((item) => (
					<option key={item.value} value={item.value}>{item.label}</option>
				))
			}
		</select>
	)
}

export default Select;