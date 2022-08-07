import { Post } from '@/models/post'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'

export interface PostCardProps {
	post: Post
}

export function PostCard({ post }: PostCardProps) {
	if (!post) return null
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>
				<Stack my={2} direction="row">
					<Typography variant="body1">
						{format(Number(post.publishedDate), 'dd MMM yyyy')}
					</Typography>
					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
					<Typography>{post.tagList.join(', ')}</Typography>
				</Stack>

				<Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	)
}
