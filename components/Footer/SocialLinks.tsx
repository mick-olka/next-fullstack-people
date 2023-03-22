import Image from 'next/image'

// import * as S from './styles'

import Dribble from '@/public/icons/dribble.svg'
import Facebook from '@/public/icons/facebook.svg'
import Instagram from '@/public/icons/instagram.svg'
import Pinterest from '@/public/icons/pinterest.svg'
import Twitter from '@/public/icons/twitter.svg'

export const SocialLinks = () => {
  return (
    <>
      <Image alt={'Twitter'} src={Twitter} />
      <Image alt={'Facebook'} src={Facebook} />
      <Image alt={'Pinterest'} src={Pinterest} />
      <Image alt={'Dribble'} src={Dribble} />
      <Image alt={'Instagram'} src={Instagram} />
    </>
  )
}
