import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { users } from '../../constants/users'
import { DeleteButton, Wrapper } from './UsersPage.styled'
import API from '../../shared/services/api'

function UsersPage() {
  useEffect(() => {
      const formData = new FormData()

      formData.append('username', 'zalupa529@gmail.com')
      formData.append('password', 'wasd12345')

      API.post('login', formData)
  }, [])

  return (
    <Wrapper>
      <div className="wrapper">
        {users.map((el) => (
          <Link key={el.id} to={`/users/${el.id}`} className="custom-card">
            <DeleteButton />
            <div className="image-wrapper">
              <img
                className="image"
                src={el.profilePicture}
                alt={el.name + ' ' + el.surname}
              />
            </div>
            <div className="text">
              <h2 className="text__title">
                {el.name} <br /> {el.surname}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default UsersPage
