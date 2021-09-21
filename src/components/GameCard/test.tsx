import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 50,00" />)

    expect(screen.getByText('R$ 50,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon when his value is provided', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonSize="normal"
        ribbonColor="primary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toHaveStyle({
      'background-color': '#F231A5',
      height: '3.6rem',
      'font-size': '1.4rem'
    })
    expect(ribbon).toBeInTheDocument()
  })
})
