import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export let theme = createTheme({
	typography: {
		fontFamily: '"Heebo", "Roboto", sans-serif',
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
			light: '#EDF7FA',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D',
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',
					'@media (min-width): 768px': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',
					'@media (min-width): 900px': {
						maxWidth: '860px',
					},
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover',
			},
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						color: 'white',
					},
				},
			],
		},
		MuiChip: {
			variants: [
				{
					props: { color: 'secondary' },
					style: {
						fontSize: 16,
						backgroundColor: '#142850',
						color: 'white',
						fontWeight: 'bold',
					},
				},
			],
		},
	},
})

export const muiResponsive = {
	MOBILE: '(max-width:600px)',
	TABLET: '(max-width:960px)',
	LARGE_SCREEN: '(max-width:1200px)',
	EXTRA_LARGE_SCREEN: '(max-width:1440px)',
}

theme = responsiveFontSizes(theme)
