import { Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { PostCard } from './post-card'
import React from 'react'
import { Work } from '@/models'
import { WorkList } from '../work'

const workList: Work[] = [
	{
		id: '1',
		title: 'Designing Dashboards',
		createdAt: '1659885342443',
		updatedAt: '1659885342443',
		tagList: ['Dashboard'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnailUrl:
			'https://res.cloudinary.com/dmspucdtf/image/upload/v1659888570/learn-nextjs/Rectangle_30_wnzzr0.jpg',
	},
	{
		id: '2',
		title: 'Vibrant Portraits of 2020',
		createdAt: '1659885342444',
		updatedAt: '1659885342444',
		tagList: ['Illustration'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnailUrl:
			'https://res.cloudinary.com/dmspucdtf/image/upload/v1659888570/learn-nextjs/Rectangle_32_s37itf.jpg',
	},
	{
		id: '3',
		title: '36 Days of Malayalam type',
		createdAt: '1659885342445',
		updatedAt: '1659885342445',
		tagList: ['Typography'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnailUrl:
			'https://res.cloudinary.com/dmspucdtf/image/upload/v1659888570/learn-nextjs/Rectangle_34_jtnhgv.jpg',
	},
]

export function FeaturedWorks() {
	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography variant="h5" mb={4}>
					Featured Works
				</Typography>

				<WorkList workList={workList} />
			</Container>
		</Box>
	)
}
