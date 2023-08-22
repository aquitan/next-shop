import Button from "../button/Button"
import { Input } from "../input/Input"

export const Register = () => {
	return (
		<>
			<Input type='text' placeholder="Логин" name='login' />
			<Input type='email' placeholder="Почта" name='email' />
			<Input type='password' placeholder="Придумайте пароль" name='password' />
			<Input type='password' placeholder="Повторите пароль" name='repeatPassword' />
			<Button type='submit'>Регистрация</Button>
		</>
	)
}