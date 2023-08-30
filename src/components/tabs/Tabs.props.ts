export type TabProps = {
	advantages?: string[],
	spheres?: string[],
	application?: string,
	packaging?: string,
	description?: string[],
	code?: string,
	expirationDate?: string,
	consumption?: string,
	instrumentCleaning?: string,
	content?: string,
	safety?: string,
	attention?: string,
	preparation?: string[],
	characteristics: ProductCharacteristics[] | undefined
}

export type ProductCharacteristics = {
	title: string,
	value: string
}
