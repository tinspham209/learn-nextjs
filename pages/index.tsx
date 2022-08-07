import { HeroSection, RecentPosts } from '@/components/home'
import { FeaturedWorks } from '@/components/home/featured-works'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
