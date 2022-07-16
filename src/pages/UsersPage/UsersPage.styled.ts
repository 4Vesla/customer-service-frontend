import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.div(
  css({
    paddingTop: 30,
    height: 'calc(100vh - 56px)',
    background:
      'linear-gradient(180deg, rgba(203,238,255,1) 31%, rgba(128,180,232,1) 100%)',
    '.wrapper': {
      padding: '0 24px',
      maxWidth: 1300,
      margin: '0 auto',
      display: 'flex',
        justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '17px 17px',
    },
    '.card': {
      maxWidth: '24%',
      minWidth: '300px',
      flex: '1 0 24%',
    },
  })
)
