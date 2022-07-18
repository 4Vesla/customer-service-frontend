import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DeleteButton, Wrapper } from './UsersPage.styled'
import API from '../../shared/services/api'
import { useGlobalContext } from '../../shared/context/GlobalContext'

function UsersPage() {
  const { users, setUsers } = useGlobalContext()

  useEffect(() => {
    API.get('customers')
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch((e) => {
        console.log(e)
      })
  }, [setUsers])

  return (
    <Wrapper>
      <div className="wrapper">
        {users.map((el) => (
          <Link key={el.id} to={`/users/${el.id}`} className="custom-card">
            <DeleteButton />
            <div className="image-wrapper">
              <img
                className="image"
                src={el.photoUrl || 'img/user-empty.jpg'}
                alt={el.name + ' ' + el.surname ?? ''}
              />
            </div>
            <div className="text">
              <h2 className="text__title">
                {el.name ?? ''} <br /> {el.surname ?? ''}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default UsersPage
