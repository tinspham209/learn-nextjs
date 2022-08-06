import { LayoutProps } from '@/models/index'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { Footer, Header } from '../common/index'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Link href="/">
				<a>Home</a>
			</Link>

			<Link href="/blog">
				<a>Blog</a>
			</Link>

			<Link href="/works">
				<a>Works</a>
			</Link>

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
