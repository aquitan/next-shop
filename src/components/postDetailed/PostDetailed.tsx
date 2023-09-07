import Image from "next/image"
import { HTag, PTag } from "../../components"
import { PostDetailedProps } from "./PostDetailed.props"
import styles from './PostDetailed.module.css'

export const PostDetailed = ({ post }: PostDetailedProps) => {
	return (
		<div className={styles.wrap}>
			<HTag tag='h1' size='xl' align="center" weight='light'>Fast Fashion, And Faster Fashion</HTag>
			<div className={styles.info}>
				<div>{post?.author} / {post?.date}</div>
			</div>
			<Image className={styles.imgMain} src={'/post-img.png'} width={800} height={500} alt='' />
			<div className={styles.content}>
				{
					post.description.map((p: string) => (
						<PTag>
							{p}
						</PTag>
					))
				}
				<Image className={styles.textImg} src={post.imgList[0]} width={500} height={300} alt='' />
				{
					post.description.map((p: string) => (
						<PTag>
							{p}
						</PTag>
					))
				}

				<Image className={styles.textImg} src={post.imgList[0]} width={500} height={300} alt='' />

			</div>
		</div>
	)
}