import { BlogCategories, HTag, PageBanner, RecentPost } from "@/components";
import { BlogPreview } from "@/components/blogPreview/BlogPreview";
import Section from "@/components/section/Section";
import styles from './page.module.css'


const posts = [
	{
		id: '1',
		title: 'Going all-in with millennial design',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
		author: 'Admin',
		date: '30.08.2023',
		category: 'Масло',
		img: '/blog-post-preview.png',
	},
	{
		id: '2',
		title: 'Going all-in with millennial design',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
		author: 'Admin',
		date: '30.08.2023',
		category: 'Масло',
		img: '/blog-post-preview.png',
	}
]

const Blog = () => {
	return (
		<>
			<div>
				<PageBanner title="Блог" />
			</div>
			<Section>
				<div className={styles.cols}>
					<div>
						{
							posts.map(post => (
								<BlogPreview key={post.id} id={post.id} title={post.title} description={post.description} author={post.author} date={post.date} category={post.category} img={post.img} />
							))
						}
					</div>
					<div className={styles.recently}>
						<BlogCategories />
						<div>
							<HTag tag='h2' size="m" weight="light">Недавние посты</HTag>
							{
								posts.map(post => (
									<RecentPost title={post.title} img={post.img} date={post.date} />
								))
							}
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}

export default Blog;