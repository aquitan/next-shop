import { HTag, AuthForm } from "@/components";
import Section from "@/components/section/Section"

const Auth = () => {
	return (
		<Section>
			<HTag tag='h1' align="center">Авторизация</HTag>
			<AuthForm />

		</Section>
	)
}

export default Auth;