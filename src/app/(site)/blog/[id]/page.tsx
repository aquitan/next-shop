import { PostDetailed } from "@/components";
import Section from "@/components/section/Section";

type Props = {
	params: {
		id: string
	}
}

const posts = [
	{
		id: '1',
		title: 'Going all-in with millennial design',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.', ' Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.', ' Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
		],
		author: 'Admin',
		date: '30.08.2023',
		category: 'Масло',
		img: '/blog-post-preview.png',
		imgList: [
			'/blog-post-preview.png', '/blog-post-preview.png', '/blog-post-preview.png'
		]
	},
	{
		id: '2',
		title: 'Going all-in with millennial design',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.', ' Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.', ' Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
		],
		author: 'Admin',
		date: '30.08.2023',
		category: 'Масло',
		img: '/blog-post-preview.png',
		imgList: [
			'/blog-post-preview.png', '/blog-post-preview.png', '/blog-post-preview.png'
		]
	}
]

const getPost = async (id: string) => {
	const el = posts.find(item => (item.id === id))
	if (!el) {
		return
	}

	return el
}



const Post = async ({ params: { id } }: Props) => {

	const post = await getPost(id)

	return (
		<Section>
			{
				post ? <PostDetailed post={post} /> : null
			}

		</Section>
	)
}

export default Post;