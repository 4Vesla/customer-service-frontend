import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { AiFillDelete } from 'react-icons/ai'

export const Wrapper = styled.div(
  css({
    paddingTop: 30,
    minHeight: 'calc(100vh - 56px)',
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

    '.custom-card': {
      position: 'relative',
      padding: '1.5rem 1rem 1rem',
      boxSizing: 'border-box',
      maxWidth: '18%',
      minWidth: '200px',
      aspectRatio: '9/10',
      flex: '1 0 19%',
      boxShadow: '2px 3px 10px 1px rgba(34, 60, 80, 0.2)',
      background: '#fff',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '300ms ease-in-out',
      userSelect: 'none',
      textDecoration: 'none',
    },

    '.custom-card:active': {
      background: '#d6d6d6',
    },

    '.image-wrapper': {
      textAlign: 'center',
    },

    '.image': {
      width: '80%',
      aspectRatio: '1/1',
      borderRadius: '50%',
      objectFit: 'cover',
    },

    '.text__title': {
      textAlign: 'center',
      fontSize: '1.75rem',
      margin: '5px 0',
      color: '#727272',
    },
  })
)

export const DeleteButton = styled(AiFillDelete)(
  css({
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '26px',
    height: '26px',
    color: '#4d4d4d',
    cursor: 'pointer',
  })
)
