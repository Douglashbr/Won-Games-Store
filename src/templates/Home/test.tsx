import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamerCardMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: gamerCardMock,
  mostPopularHighlight: highLightMock,
  mostPopularGames: gamerCardMock,
  upcommingGames: gamerCardMock,
  upcommingHighlight: highLightMock,
  upcommingMoreGames: gamerCardMock,
  freeGames: gamerCardMock,
  freeHighlight: highLightMock
}

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
