import { create } from 'zustand'

type UseCompareType = {
	products: any[],
	loading: boolean,
	addProduct: (id: string, items: any[]) => void,
	removeProduct: (id: string) => any
}

export const useCompare = create<UseCompareType>()((set) => ({
	products: [],
	loading: false,
	addProduct: (id, items) => {
		set({ loading: true, })
		const product = items.find(i => i.id === id)
		set((state) => ({
			products: [...state.products, product]
		}))

	},
	removeProduct: (id) => {

	}
}))