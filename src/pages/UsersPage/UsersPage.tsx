import React from 'react'
import { Link } from 'react-router-dom'
import { users } from '../../consts/users'
import { DeleteButton, Wrapper } from './UsersPage.styled'

function UsersPage() {
  return (
    <Wrapper>
      <div className="wrapper">
        {users.map((el) => (
          <Link to={`/users/${el.id}`} className="custom-card">
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
