import Section from "@/components/section/Section";
import { articlesData } from "../../../../../mockData/articlesData";
import PostDetailed from "@/components/postDetailed/PostDetailed";

type Props = {
	params: {
		id: string
	}
}

const getPost = async (id: string) => {
	const el = articlesData.find(item => (item.id === id))
	if (!el) {
		return
	}

	return el
}



const Post = async ({ params: { id } }: Props) => {

	const post = await getPost(id)
	console.log('post', post)

	return (
		<Section>
			{
				post ? <PostDetailed post={post} /> : null
			}

		</Section>
	)
}

export default Post;