import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './RegisterPage.styled'
import { Button, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormData = {
  name: string
  surname: string
  email: string
  phoneNumber: string
  birthDate: string
  photo: File | null
  password: string
  repeatPassword: string
}

const MAX_FILE_SIZE = 1024 * 1024 * 5

function RegisterPage() {
  const inputEl = useRef<HTMLInputElement | null>(null)
  const { reset, control, handleSubmit } = useForm<FormData>()

  const getInput = (): HTMLInputElement | null => {
    return inputEl.current instanceof HTMLInputElement ? inputEl.current : null
  }

  const getFile = (): File | null => {
    const input = getInput()

    return input ? input.files?.[0] ?? null : null
  }

  const onFileChange = () => {
    const input = getInput()
    const file = getFile()

    if (file?.size && file?.size > MAX_FILE_SIZE && input) {
      toast.error('Too large image. Max size is 5mb')
      input.value = ''
    }
  }

  const submit = async (data: FormData) => {
    try {

      reset()
      toast.success('Registered')
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
              defaultValue={'2003-05-24'}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Birth date"
                  variant="standard"
                  type="date"
                  onChange={onChange}
                  value={value}
                  fullWidth={true}
                />
              )}
            />
          </label>
          <label className="form-item">
            <div className="file-label">Upload a photo (Optional): </div>
            <div className="upload-file-wrapper">

              <input
                ref={inputEl}
                onChange={onFileChange}
                className="input-file"
                type="file"
                accept="image/*,capture=camera"
              />
            </div>
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
