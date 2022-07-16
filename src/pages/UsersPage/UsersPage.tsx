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
        <div className="card">
          <Card sx={{ width: '100%' }}>
            <CardActionArea>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://4vesla.s3.eu-central-1.amazonaws.com/test.jpg"
                  alt="user"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Good boy
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}

export default UsersPage
