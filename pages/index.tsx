import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	return <Box className={styles.container}>Home page</Box>
}

Home.Layout = MainLayout

export default Home
