import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import * as S from './styles'
import 'swiper/css'
import 'swiper/css/navigation'

export const PeopleSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Pane>
      <S.SwiperStyled
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => null}
        onSwiper={(swiper) => null}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
      >
        {React.Children.map(children, (child) => (
          <S.SwiperSlideStyled>{child}</S.SwiperSlideStyled>
        ))}
      </S.SwiperStyled>
    </S.Pane>
  )
}
