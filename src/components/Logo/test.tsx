import { screen } from '@testing-library/react'
import { renderWithTheme } from '../..//utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o component `render`
    renderWithTheme(<Logo />)
    //selecionar o elemento a ser testado `screen`  (queries) - getByLabel ....
    //expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'color: #FAFAFA'
    )
  })

  it('should render a black label when color is passsed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'color: #030517'
    )
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo $size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width: 20rem'
    )
  })

  it('should render a normal logo when size is defaul', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width: 11rem'
    )
  })

  it('should render a bigger logo without text if hideMobile', () => {
    renderWithTheme(<Logo $hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:  768px)'
      }
    )
  })
})
