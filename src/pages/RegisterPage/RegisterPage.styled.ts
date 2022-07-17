import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { IoMdCloudUpload } from 'react-icons/io'

export const Wrapper = styled.div(
  css({
    display: 'flex',
    alignItems: 'center',

    '.half': {
      flex: '1 0 50%',
    },

    '.form': {
      padding: '50px',
      maxWidth: '400px',
      margin: '0 auto',
    },

    '.view': {
      height: 'calc(100vh - 56px)',
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

    '.upload-file-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '15px',
      marginBottom: '-12px',
      border: '2px dashed #ccebff',
      borderRadius: '6px',
      padding: '2.5rem 2rem',
      boxSizing: 'border-box',
      cursor: 'pointer',
    },

    '.input-file': {
      display: 'none',
    },

    '.file-label': {
      marginBottom: '.5rem',
      color: '#666666',
    },

    '@media screen and (max-width: 900px)': {
      '.view': {
        display: 'none',
      },
    },
  })
)

export const PictureIcon = styled(IoMdCloudUpload)(
  css({
    width: '30px',
    height: '30px',
    color: '#80ccff',
  })
)
