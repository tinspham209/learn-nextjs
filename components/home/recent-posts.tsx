import { Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { PostCard } from './post-card'
import React from 'react'
import { Post } from '@/models/post'

const postList: Post[] = [
	{
		id: '1',
		title: 'Making a design system from scratch',
		publishedDate: '1659885342443',
		tagList: ['Design', 'Pattern'],
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
	{
		id: '2',
		title: 'Creating pixel perfect icons in Figma',
		publishedDate: '1659885342444',
		tagList: ['Figma', 'Icon Design'],
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
]

export function RecentPosts() {
	return (
		<Box component={'section'} bgcolor="secondary.light" pt={2} pb={4}>
			<Container>
				<Stack
					direction="row"
					mb={2}
					justifyContent={{
						xs: 'center',
						md: 'space-between',
					}}
					alignItems={'center'}
				>
					<Typography variant="h5">Recent Posts</Typography>
					<Link passHref href="/blog">
						<MuiLink
							sx={{
								display: {
									xs: 'none',
									md: 'inline-block',
								},
							}}
						>
							View all
						</MuiLink>
					</Link>
				</Stack>
				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					spacing={3}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					{postList.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
