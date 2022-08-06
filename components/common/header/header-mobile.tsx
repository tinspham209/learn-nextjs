import {
	Container,
	Drawer,
	IconButton,
	Link as MuiLink,
	List,
	ListItem,
	ListItemButton,
	Stack,
} from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ROUTE_LIST } from './routes'
import MenuIcon from '@mui/icons-material/Menu'
export function HeaderMobile() {
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}
		setOpen(open)
	}

	return (
		<Box component={'header'} py={2} display={{ xs: 'block', md: 'none' }}>
			<Container maxWidth="xs">
				<Stack direction="row" justifyContent={'flex-start'}>
					<IconButton onClick={toggleDrawer(true)} onKeyDown={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
				</Stack>
				<Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
					<List
						sx={{
							minWidth: '180px',
						}}
					>
						{ROUTE_LIST.map((route) => (
							<ListItem key={route.path} onClick={toggleDrawer(false)} disableGutters>
								<ListItemButton
									sx={{
										justifyContent: 'center',
									}}
									selected={router.pathname === route.path}
								>
									<Link href={route.path} passHref>
										<MuiLink
											sx={{ fontWeight: 'medium' }}
											underline="hover"
											className={clsx({ active: router.pathname === route.path })}
										>
											{route.label}
										</MuiLink>
									</Link>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			</Container>
		</Box>
	)
}
