import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type InputWrapperProps = Pick<
  TextFieldProps,
  'icon' | 'iconPosition' | 'disabled'
>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

const inputModifier = {
  withIcon: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    svg {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  `,
  left: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xlarge};

    svg {
      left: 1.5rem;
    }
  `,
  right: (theme: DefaultTheme) => css`
    padding-right: ${theme.spacings.xlarge};
    svg {
      right: 1.5rem;
    }
  `,
  disabled: () => css`
    ${Input},
    ${Label} {
      opacity: 0.6;
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${Label},
    svg {
      color: ${theme.colors.red};
    }
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, icon, iconPosition }) => css`
    display: flex;
    position: relative;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${!!icon && inputModifier.withIcon(theme)}
    ${!!icon && !!iconPosition && inputModifier[iconPosition](theme)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && inputModifier.disabled()}
    ${!!error && inputModifier.error(theme)}
  `}
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
