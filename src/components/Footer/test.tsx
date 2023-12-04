import { screen } from '@testing-library/react'
import Footer from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Footer />', () => {
  it('should a reder 4 columns topic', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

// verificar se tem 4 columns
//contacts
//follow us
//links
//location
