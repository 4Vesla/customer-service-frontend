import React from 'react'
import { Wrapper } from './UsersPage.styled'
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

function UsersPage() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="custom-card">
          <div className="image-wrapper">
            <img
              className="image"
              src="https://4vesla.s3.eu-central-1.amazonaws.com/test.jpg"
            />
          </div>
          <div className="text">
            <h2 className="text__title">
              Ihor <br /> Pidhornyi
            </h2>
          </div>
        </div>
        <div className="custom-card">
          <div className="image-wrapper">
            <img className="image" src="img/user-empty.jpg" />
          </div>
          <div className="text">
            <h2 className="text__title">
              Ruslan <br /> Gumeniuk
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default UsersPage
