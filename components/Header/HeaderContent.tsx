import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

import Logo from '@/public/logo.svg'

export const HeaderContent = () => {
  return (
    <>
      <S.LogoLinksNavigateWrapper>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} />
        </Link>
      </S.LogoLinksNavigateWrapper>
      <S.HeaderContentCenter>
        <Typography fontSize='1.5rem'>Lorem ipsum dolor sit amet.</Typography>
      </S.HeaderContentCenter>
    </>
  )
}
