import MenuIcon from '@mui/icons-material/Menu'
import {
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  Toolbar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import * as S from './styles'

import Logo from '@/public/logo.svg'

import { v } from '@/styles/variables'
import { links } from './data'

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar>
        <Link href='/'>
          <Image src={Logo} alt={'Logo'} />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {links.map((l) => (
          <Link href={l.path} key={l.path}>
            <ListItem disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                <AddRoundedIcon />
              </ListItemIcon> */}
                <ListItemText primary={l.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <Box>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{ left: '1rem', position: 'absolute', top: '1rem', display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <S.DrawerStyled
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: v.navbarWidth,
          },
        }}
      >
        {drawer}
      </S.DrawerStyled>
      <S.DrawerStyled
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: v.navbarWidth },
        }}
        open
      >
        {drawer}
      </S.DrawerStyled>
    </Box>
  )
}
