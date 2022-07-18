import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { User, users } from '../../constants/users'
import { ReturnButton, Wrapper } from './UserPage.styled'

function UserPage() {
  const [opened, setOpened] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    setOpened(true)
  }, [])

  const onReturnClicked = () => {
    setOpened(false)
    setTimeout(() => {
      navigate('../users')
    }, 500)
  }

  const { id } = useParams()
  const user: User | undefined = users.find((el) => el.id.toString() === id)

  return user ? (
    <Wrapper>
      <div className={opened ? 'wrapper wrapper_opened' : 'wrapper'}>
        <div className="custom-card">
          <div onClick={onReturnClicked}>
            <ReturnButton />
          </div>
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
