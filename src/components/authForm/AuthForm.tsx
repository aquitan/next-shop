'use client'

import { FormEventHandler, useState } from "react"
import { AuthToggle } from "../authToggle/AuthToggle"
import { Login } from "../login/Login"
import { Register } from "../register/Register"

export const AuthForm = () => {
	const [switched, setSwitched] = useState<true | false>(false)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		const data = new FormData(event.currentTarget)

		console.log('form', data)
	}

	return (
		<div>
			<AuthToggle switched={switched} setSwitched={() => setSwitched(state => !state)} />
			<form onSubmit={handleSubmit}>
				{
					switched ? <Register /> : <Login />
				}
			</form>
		</div>
	)
}