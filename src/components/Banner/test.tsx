import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        title="Test title"
        subtitle="Test subtitle"
        img="https://test.com/test.png"
        buttonLabel="Buy now"
        buttonLink="https://button.link.com"
      />
    )

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
})
