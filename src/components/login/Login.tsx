import Button from "../button/Button"
import { Input } from "../input/Input"

export const Login = () => {
	return (
		<>
			<Input type='text' placeholder="Логин" name='login' />
			<Input type='password' placeholder="Пароль" name='password' />
			<Button type='submit'>Войти</Button>
		</>
	)
}