import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SlideProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SlideProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
