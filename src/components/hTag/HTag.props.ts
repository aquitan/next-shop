import { ReactNode } from "react"

export type HProps = {
	tag: 'h1' | 'h2' | 'h3',
	children: ReactNode,
	align?: 'left' | 'center'
}