// import { Typography } from '@mui/material'

import Image from 'next/image'

import * as S from './styles'

import { SocialLinks } from '@/components/Footer/SocialLinks'
import Logo from '@/public/logo.svg'

export const FooterContent = () => {
  return (
    <S.FooterCopyrightBlock>
      <S.FooterIconWrapper>
        <Image alt={'logo'} src={Logo} />
      </S.FooterIconWrapper>
      <div>Copyright © 2023 LoremIpsum. All rights reserve.</div>
      <S.IconsBlock>
        <SocialLinks />
      </S.IconsBlock>
    </S.FooterCopyrightBlock>
  )
}
