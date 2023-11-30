import { fireEvent, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    //selecionar o menuFull
    const menuFullElemenet = screen.getByRole('navigation', { hidden: true })

    //verificar se o menu está escondido
    expect(menuFullElemenet.getAttribute('aria-hidden')).toBe('true')
    expect(menuFullElemenet).toHaveStyle({ opacity: 0 })
    //clicar no botao menu e verificar se abriu o meun
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(menuFullElemenet.getAttribute('aria-hidden')).toBe('false')
    expect(menuFullElemenet).toHaveStyle({ opacity: 1 })
    //clicar no botão fechar e verificar se o menu fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(menuFullElemenet.getAttribute('aria-hidden')).toBe('true')
    expect(menuFullElemenet).toHaveStyle({ opacity: 0 })
  })
})
