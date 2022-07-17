import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { User, users } from '../../consts/users'
import { ReturnButton, Wrapper } from './UserPage.styled'

function UserPage() {
  const { id } = useParams()
  const user: User | undefined = users.find((el) => el.id.toString() === id)

  return user ? (
    <Wrapper>
      <div className="wrapper">
        <div className="custom-card">
          <Link to="/users">
            <ReturnButton />
          </Link>
          <div className="image-wrapper">
            <img
              className="image"
              src={user.profilePicture}
              alt={user.name + ' ' + user.surname}
            />
          </div>
          <div className="text">
            <h2 className="text__title">
              {user.name} {user.surname}
            </h2>
            <p className="text__data">Email: {user.email}</p>
            <p className="text__data">Phone: {user.phoneNumber}</p>
            <p className="text__data">Birth: {user.birthDate}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  ) : (
    <p>No user</p>
  )
}

export default UserPage
