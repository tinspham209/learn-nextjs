import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	const router = useRouter()

	function goToDetailPage() {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: 123,
				ref: 'social',
			},
		})
	}

	return <Box className={styles.container}>Home page</Box>
}

Home.Layout = MainLayout

export default Home
