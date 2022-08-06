import * as React from 'react'
import { Box } from '@mui/system'
import { MainLayout } from '@/components/layout'

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
	return <Box component={'div'}>Blog Page</Box>
}

BlogPage.Layout = MainLayout
