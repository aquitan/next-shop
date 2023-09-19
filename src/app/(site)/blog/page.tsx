import { BlogCategories, HTag, PageBanner, RecentPost } from "@/components";
import { BlogPreview } from "@/components/blogPreview/BlogPreview";
import Section from "@/components/section/Section";
import styles from './page.module.css'
import { articlesData } from '../../../../mockData/articlesData'
import { reverse } from "dns";



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
							articlesData.reverse().map((post) => (
								<BlogPreview key={post.id} id={post.id} title={post.title} description={post.text} author={post.author} date={post.date} category={post.category} img={post.imgMain} />
							))
						}
					</div>
					<div className={styles.recently}>
						<BlogCategories />
						<div>
							<HTag tag='h2' size="m" weight="light">Недавние посты</HTag>
							{
								articlesData.reverse().map(post => (
									<RecentPost key={post.id} id={post.id} title={post.title} img={post.imgMain} date={post.date} />
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