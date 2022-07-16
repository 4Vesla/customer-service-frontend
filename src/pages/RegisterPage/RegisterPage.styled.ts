import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.div(
  css({
    display: 'flex',
    alignItems: 'center',
    '.half': {
      flex: '1 0 50%',
    },
    '.form': {
      minWidth: '300px',
      padding: '50px',
      boxSizing: 'border-box',
    },
    '.view': {
      height: '100vh',
      backgroundImage: `url(img/tree.jpg)`,
      backgroundPosition: 'center center',
    },
    '.title, p': {
      textAlign: 'center',
    },
    '.form-item': {
      display: 'block',
      marginBottom: '10px',
    },
    '@media screen and (max-width: 900px)': {
      '.view': {
        display: 'none',
      },
    },
  })
)
