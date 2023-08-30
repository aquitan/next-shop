'use client'

import { ReactNode, createContext, useState } from "react"

type ContextProps = {
	value: boolean
	changeMode: () => void | null
}

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeContext = createContext<ContextProps>({ value: false, changeMode: () => null })

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [value, setValue] = useState<true | false>(false)

	const changeMode = () => {
		setValue(state => !state)
	}


	return (
		<ThemeContext.Provider value={{ value, changeMode }}>
			<div className={`theme ${value ? 'dark' : 'light'}`}>
				{children}
			</div>
		</ThemeContext.Provider>
	)
}