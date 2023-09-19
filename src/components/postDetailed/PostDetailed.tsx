'use client'

import Image from "next/image"
import { HTag, PTag } from "../../components"
import { PostDetailedProps } from "./PostDetailed.props"
import styles from './PostDetailed.module.scss'
import Slider from "../slider/Slider"
import Link from "next/link"


const PostDetailed = ({ post }: any) => {
	return (
		<div className={styles.wrap}>
			<HTag tag='h1' size='xl' align="center" weight='light'>{post.title}</HTag>
			<div className={styles.info}>
				<div>{post?.author} / {post?.date}</div>
			</div>
			<Image className={styles.imgMain} src={post.imgMain} width={800} height={500} alt={post.title} />

			{
				post.text.slice(0, 2).map((p:string) => (
					<PTag key={p}>{p}</PTag>
				))
			}

			{
				post.sliderOne.length ? (
					<div className={styles.slider}>
						<Slider imgs={post.sliderOne} />
					</div>
				) : null
			}

			{
				post.text.slice(2).map((p:string) => (
					<PTag key={p}>{p}</PTag>
				))
			}

			<Link className={styles.postLink} href={post.linkVk[0].link}>
				{post.linkVk[0].title}
				<Image src={post.linkVk[0].icon} width={20} height={20} alt={post.linkVk[0].title} />
			</Link>
			
		</div>
	)
}

export default PostDetailed;