import React from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../../shared/components/InputStyled'
import { Wrapper } from './RegisterPage.styled'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

function RegisterPage() {
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
          <h2 className="title">Register</h2>
          <label className="form-item">
            <span>Name:</span>
            <CustomInput />
          </label>
          <label className="form-item">
            <span>Surname:</span>
            <CustomInput />
          </label>
          <label className="form-item">
            <span>Phone number:</span>
            <CustomInput />
          </label>
          <label className="form-item">
            <span>Birth date:</span>
            <CustomInput />
          </label>
          <label className="form-item">
            <span>Password:</span>
            <CustomInput />
          </label>
          <label className="form-item">
            <span>Repeat password:</span>
            <CustomInput />
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
