import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Wrapper } from './LoginPage.styled'
import { CustomInput } from '../../shared/components/InputStyled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function LoginPage() {
  const {
    getValues,
    watch,
    reset,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const submit = async () => {
    try {
      toast.success('Success')
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
            <span>Email:</span>
            <CustomInput type="email" placeholder="Email..." />
          </label>
          <label className="form-item">
            <span>Password:</span>
            <CustomInput type="password" placeholder="Password..." />
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
