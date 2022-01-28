import React, {useState} from 'react';
import {SignInWrapper, ButtonBarWrapper, SignInTitle, PTag, OptionLink, SignUpWrapper} from './sign-in.style';
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
      <PTag>Sign in with your email and password</PTag>
      <form>
        <FormInput name='email' type='email' label='email' handleChange={handleChange} value={email} required/>
        <FormInput name='password' type='password' label='password' handleChange={handleChange} value={password}
                   required/>
        <ButtonBarWrapper>
          <CustomButton type='submit' onSubmit={handleSubmit}>Sign In</CustomButton>
          <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>{''}Sign In With
            GOOGLE{''}</CustomButton>
        </ButtonBarWrapper>
        <SignUpWrapper>Don't have an account?
          <OptionLink to='/signup'>{''}Sign Up</OptionLink>
        </SignUpWrapper>
      </form>
    </SignInWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);