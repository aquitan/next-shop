'use client'

import Image from "next/image"
import { HTag, PTag } from "../../components"
import { PostDetailedProps } from "./PostDetailed.props"
import styles from './PostDetailed.module.scss'
import Slider from "../slider/Slider"


const PostDetailed = ({ post }: any) => {
	return (
		<div className={styles.wrap}>
			<HTag tag='h1' size='xl' align="center" weight='light'>{post.title}</HTag>
			<div className={styles.info}>
				<div>{post?.author} / {post?.date}</div>
			</div>
			<Image className={styles.imgMain} src={post.img} width={800} height={500} alt='' />

			{
				post.text.slice(0, 2).map((p:string) => (
					<PTag key={p}>{p}</PTag>
				))
			}

			<div className={styles.slider}>
				<Slider imgs={post.sliderOne} />
			</div>

			{
				post.text.slice(2).map((p:string) => (
					<PTag key={p}>{p}</PTag>
				))
			}
		</div>
	)
}

export default PostDetailed;