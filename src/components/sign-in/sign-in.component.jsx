import React, {useState} from 'react';
import {Wrapper} from './sign-in.style';
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
    <Wrapper>
      <h2>I already have an account.</h2>
      <span>Sign in   with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' label='email' handleChange={handleChange} value={email} required/>
        <FormInput name='password' type='password' label='password' handleChange={handleChange} value={password}
                   required/>
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{''}Sign In With
            GOOGLE{''}</CustomButton>
        </div>
      </form>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);