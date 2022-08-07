import { Seo } from '@/components/common'
import { HeroSection, RecentPosts } from '@/components/home'
import { FeaturedWorks } from '@/components/home/featured-works'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo
				data={{
					title: 'Learn NextJS',
					description: 'tep by step tutorials to build a full CRUD website using NextJS',
					url: 'https://learn-nextjs-three-sage.vercel.app',
					thumbnailUrl:
						'https://res.cloudinary.com/dmspucdtf/image/upload/v1659891297/learn-nextjs/next-js-automatic-image-optimization-next-image_cvlwnz.png',
				}}
			/>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
