import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './RegisterPage.styled'
import { Button, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormData = {
  name: string
  surname: string
  phoneNumber: string
  birthDate: string
  password: string
  repeatPassword: string
}

function RegisterPage() {
  const {
    getValues,
    watch,
    reset,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>()

  const submit = async (data: FormData) => {
    try {
      console.log(data)

      reset()
      toast.success('Success')
    } catch (e) {
      throw e
    }
  }

  return (
    <Wrapper>
      <div className="half">
        <form className="form" onSubmit={handleSubmit(submit)}>
          <h2 className="title">Register</h2>
          <label className="form-item">
            <Controller
              name={'name'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Name"
                  variant="standard"
                  type="text"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>
          <label className="form-item">
            <Controller
              name={'surname'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Surname"
                  variant="standard"
                  type="text"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>
          <label className="form-item">
            <Controller
              name={'phoneNumber'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Phone number"
                  variant="standard"
                  type="tel"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>
          <label className="form-item">
            <Controller
              name={'birthDate'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Birth date"
                  variant="standard"
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
          <label className="form-item">
            <Controller
              name={'repeatPassword'}
              defaultValue={''}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Repeat password"
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
            fullWidth={true}
            variant="contained"
            type="submit"
            sx={{
              marginTop: '35px',
            }}
          >
            Sign up
          </Button>

          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
      <div className="half view">&nbsp;</div>
    </Wrapper>
  )
}

export default RegisterPage
