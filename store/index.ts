import { create } from 'zustand'

type UseCompareType = {
	products: any[],
	loading: boolean,
	addProduct: (id: string, items: any[]) => void,
	removeProduct: (id: string) => any
}
type UseFavouritesType = {
	favourites: any[],
	loading: boolean,
	addFav: (id: string, items: any[]) => void,
	removeFav: (id: string) => any
}


export const useCompare = create<UseCompareType>()((set) => ({
	products: [],
	loading: false,
	addProduct: (id, items) => {
		const product = items.find(i => i.id === id)
		set((state) => ({
			products: [...state.products, product]
		}))

	},
	removeProduct: (id) => {
		set((state) => {
			const arr = state.products.filter(item => item.id !== id )
			console.log('arr', arr)
			return {
				products: [...arr]
			}
		})
	}
}))


export const useFavourites = create<UseFavouritesType>()((set) => ({
	favourites: [],
	loading: false,
	addFav: (id, items) => {
		const product = items.find(i => i.id === id)
		set((state) => ({
			favourites: [...state.favourites, product]
		}))

	},
	removeFav: (id) => {
		set((state) => {
			const arr = state.favourites.filter(item => item.id !== id )
			console.log('arr', arr)
			return {
				favourites: [...arr]
			}
		})
	}
}))

