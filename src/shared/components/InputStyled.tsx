import InputUnstyled, {
  InputUnstyledProps,
  inputUnstyledClasses,
} from '@mui/base/InputUnstyled'
import { styled } from '@mui/system'
import React from 'react'
import { blue, grey } from '@mui/material/colors'

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  display: flex;
  font-weight: 500;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : [300]};
  border-radius: 8px;
  background: ${theme.palette.mode === 'dark' ? [900] : [50]};
  align-items: center;
  justify-content: center;

  &.${inputUnstyledClasses.focused} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : [100]};
    border-color: ${theme.palette.mode === 'dark' ? [700] : [400]};
  }
`
)

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
`
)

export function CustomInput(props: InputUnstyledProps) {
  const { components, ...other } = props
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
    />
  )
}
