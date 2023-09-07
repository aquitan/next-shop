export type PostDetailedProps = {
	post: Post
}

export type Post = {
	id: string,
	title: string,
	description: string[],
	author: string,
	date: string,
	category: string,
	img: string,
	imgList: string[]
}