import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='password'/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LoginPage
