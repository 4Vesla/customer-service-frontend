import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CustomInput } from '../../shared/components/InputStyled'
import { Wrapper } from './RegisterPage.styled'
import {Button} from "@mui/material";

function RegisterPage() {
  return (
    <Wrapper>
      <div className="half">
        <form className="form">
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

          <Button fullWidth={true} variant="contained" type="submit">Sign up</Button>

          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </form>
      </div>
      <div className="half view">&nbsp;</div>
    </Wrapper>
  )
}

export default RegisterPage
