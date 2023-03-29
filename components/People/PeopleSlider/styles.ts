import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Pane = styled.div`
  width: 100%;
  margin: 1rem;
  position: relative;
`
export const SwiperStyled = styled(Swiper)`
  width: 70vw;
  padding: 0 3rem;
  height: 100%;
`

export const SwiperSlideStyled = styled(SwiperSlide)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1px;
`
