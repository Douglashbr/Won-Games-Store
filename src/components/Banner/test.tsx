import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  title: 'Test title',
  subtitle: 'Test subtitle',
  img: 'https://test.com/test.png',
  buttonLabel: 'Buy now',
  buttonLink: 'https://button.link.com'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /test title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test subtitle/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://test.com/test.png'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
