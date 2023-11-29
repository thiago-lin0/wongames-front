import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

type wrapperProps = {
  $hasIcon: boolean
} & Pick<ButtonProps, '$size' | '$fullWidth'>

const wrappeModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    display: fles;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<wrapperProps>`
  ${({ theme, $size, $fullWidth, $hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!$size && wrappeModifiers[$size](theme)}
    ${!!$fullWidth && wrappeModifiers.fullWidth()}
    ${!!$hasIcon && wrappeModifiers.withIcon(theme)}
  `}
`
