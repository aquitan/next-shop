'use client'

import { FormEventHandler, useState } from "react"
import { AuthToggle } from "../authToggle/AuthToggle"
import { Login } from "../login/Login"
import { Register } from "../register/Register"
import styles from './AuthForm.module.css'

export const AuthForm = () => {
	const [switched, setSwitched] = useState<true | false>(false)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event:any) => {
		event.preventDefault()

		const data = new FormData(event.currentTarget)

	}

	return (
		<div className={styles.wrap}>
			<AuthToggle switched={switched} setSwitched={() => setSwitched(state => !state)} />
			<form onSubmit={handleSubmit}>
				{
					switched ? <Register /> : <Login />
				}
			</form>
		</div>
	)
}