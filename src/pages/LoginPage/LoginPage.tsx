import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Wrapper } from './LoginPage.styled'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

type FormData = {
  email: string
  password: string
}

function LoginPage() {
  const { reset, control, handleSubmit } = useForm<FormData>()

  const submit = async (data: FormData) => {
    try {
      console.log(data)

      reset()
      toast.success('Logged')
    } catch (e) {
      throw e
    }
  }
  return (
    <Wrapper>
      <div className="half">
        <form className="form" onSubmit={handleSubmit(submit)}>
          <h2 className="title">Login</h2>
          <label className="form-item">
            <Controller
              name={'email'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Email"
                  variant="standard"
                  type="email"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>
          <label className="form-item">
            <Controller
              name={'password'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            sx={{
              marginTop: '35px',
            }}
          >
            Sign in
          </Button>

          <p>
            Don't have an account? <Link to="/register">Create one</Link>
          </p>
        </form>
      </div>
      <div className="half view"></div>
    </Wrapper>
  )
}

export default LoginPage
