import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { DeleteButton, Wrapper } from './UsersPage.styled'
import API from '../../shared/services/api'
import { useGlobalContext } from '../../shared/context/GlobalContext'
import { AxiosError } from '../../shared/models/axios-error'
import { toast } from 'react-toastify'
import { User } from '../../shared/models/user'

function UsersPage() {
  const navigate = useNavigate()
  const { users, setUsers, setToken } = useGlobalContext()

  const getUsers = async () => {
    try {
      const res = await API.get('customers?limit=500')
      setUsers(res.data)
    } catch (e: unknown) {
      const error = e as AxiosError
      toast.error(error.response.data.error)
      if (error.response.status === 401) {
        setToken(null)
        localStorage.removeItem('token')
        navigate('../login')
      }
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  const onClick = async (user: User) => {
    try {
      const res = await API.delete('customers/' + user.id)
      await getUsers()
      toast.success(user.name + ' ' + (user.surname ?? '') + ' was deleted')
    } catch (e: unknown) {
      const error = e as AxiosError
      toast.error(error.response.data.error)
      if (error.response.status === 401) {
        setToken(null)
        localStorage.removeItem('token')
        navigate('../login')
      }
    }
  }

  return (
    <Wrapper>
      <div className="wrapper">
        {users.map((el) => (
          <div className="custom-card" key={el.id}>
            <DeleteButton
              onClick={(event) => {
                event.stopPropagation()
                onClick(el)
              }}
            />
            <Link to={`/users/${el.id}`}>
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
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default UsersPage
