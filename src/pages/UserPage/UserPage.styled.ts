import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MdKeyboardReturn } from 'react-icons/md'

export const Wrapper = styled.div(
  css({
    paddingTop: 30,
    minHeight: 'calc(100vh - 56px)',
    background:
      'linear-gradient(180deg, rgba(203,238,255,1) 31%, rgba(128,180,232,1) 100%)',

    '.wrapper': {
      height: '100%',
      padding: '0 24px',
      maxWidth: 1300,
      margin: '24px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      transform: 'translateY(-50%)',
      opacity: '0',
      transition: 'all 500ms ease-in-out',

      '&_opened': {
        transform: 'translateY(0)',
        opacity: '1',
      },
    },

    '.custom-card': {
      position: 'relative',
      display: 'flex',
      gap: '12px',
      padding: '4rem 2rem',
      boxSizing: 'border-box',
      width: '60%',
      boxShadow: '2px 3px 10px 1px rgba(34, 60, 80, 0.2)',
      background: '#fff',
      borderRadius: '8px',
      transition: '300ms ease-in-out',
      userSelect: 'none',
      textDecoration: 'none',

      '@media screen and (max-width: 900px)': {
        width: '100%',
      },

      '@media screen and (max-width: 560px)': {
        flexDirection: 'column',
      },
    },

    '.image-wrapper': {
      width: '50%',
      textAlign: 'center',

      '@media screen and (max-width: 560px)': {
        width: '100%',
      },
    },

    '.image': {
      width: '200px',
      aspectRatio: '1/1',
      borderRadius: '50%',
      objectFit: 'cover',
    },

    '.text': {
      width: '50%',

      '@media screen and (max-width: 560px)': {
        width: '100%',
      },
    },

    '.text__title': {
      fontSize: '1.75rem',
      margin: '6px 0 36px',
      color: '#4d4d4d',
    },

    '.text__data': {
      fontSize: '1.25rem',
      margin: '12px 0',
      color: '#727272',
    },
  })
)

export const ReturnButton = styled(MdKeyboardReturn)(
  css({
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '32px',
    height: '32px',
    color: '#4d4d4d',
    cursor: 'pointer',
  })
)
