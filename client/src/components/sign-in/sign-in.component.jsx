import React, {useState} from 'react';
import {SignInWrapper, ButtonBarWrapper, SignInTitle} from './sign-in.style';
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";

const SignIn = ({googleSignInStart, emailSignInStart}) => {
  const [userCredentials, setCredentials] = useState({email: '', password: ''})
  const {email, password} = userCredentials

  const handleSubmit = event => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (event) => {
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name]: value})
  }

  return (
    <SignInWrapper>
      <SignInTitle>I already have an account.</SignInTitle>
      <span>Sign in   with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' label='email' handleChange={handleChange} value={email} required/>
        <FormInput name='password' type='password' label='password' handleChange={handleChange} value={password}
                   required/>
        <ButtonBarWrapper>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{''}Sign In With
            GOOGLE{''}</CustomButton>
        </ButtonBarWrapper>
      </form>
    </SignInWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);