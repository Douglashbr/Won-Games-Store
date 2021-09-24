import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamerCardMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
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
  }
}
