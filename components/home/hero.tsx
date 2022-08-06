import * as React from 'react'
import { Box } from '@mui/system'
import { Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.png'
import { muiResponsive } from '@/utils/theme'

export function HeroSection() {
	const isMobileScreen = useMediaQuery(muiResponsive.MOBILE)

	return (
		<Box component={'section'} pt={isMobileScreen ? 4 : 18} pb={isMobileScreen ? 4 : 9}>
			<Container>
				<Stack
					spacing={4}
					direction={isMobileScreen ? 'column-reverse' : 'row'}
					alignItems={isMobileScreen ? 'center' : 'flex-start'}
					justifyContent={isMobileScreen ? 'center' : 'flex-start'}
				>
					<Box>
						<Typography
							component="h1"
							variant={isMobileScreen ? 'h4' : 'h3'}
							fontWeight={'bold'}
							textAlign={isMobileScreen ? 'center' : 'left'}
							mb={isMobileScreen ? 3 : 5}
						>
							Hi, I am Tin,
							<br />
							Software Engineer
						</Typography>

						<Typography variant="body1" mb={5} textAlign={isMobileScreen ? 'center' : 'left'}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>

						<Box
							display={isMobileScreen ? 'flex' : 'block'}
							justifyContent={isMobileScreen ? 'center' : 'flex-start'}
						>
							<Button variant="contained">Download Resume</Button>
						</Box>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image src={avatar} layout="responsive" alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
