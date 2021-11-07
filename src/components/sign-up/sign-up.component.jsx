import React, {useState} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {Wrapper} from "../../pages/homepages/homepage.style";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const {displayName, email, password, confirmPassword} = signUp
    if (password !== confirmPassword) {
      alert(`password don't match`)
      return
    }

    try {
      const {user} = auth.createUserWithEmailAndPassword(email, password)
      createUserProfileDocument(user, {displayName: displayName})
      setSignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setSignUp({[name]: value})
  }

  const {displayName, email, password, confirmPassword} = signUp
  return (
    <Wrapper>
      <h2 className='title'> I do not have a account</h2>
      <span>Sign Up with your email and password.</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput type='text'
                   name='displayName'
                   value={displayName}
                   onChange={handleChange}
                   label='Display Name' required/>

        <FormInput type='email'
                   name='email'
                   value={email}
                   onChange={handleChange}
                   label='Email' required/>

        <FormInput type='password'
                   name='password'
                   value={password}
                   onChange={handleChange}
                   label='Password' required/>

        <FormInput type='password'
                   name='confirmPassword'
                   value={confirmPassword}
                   onChange={handleChange}
                   label='Confirm Password' required/>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </Wrapper>
  )
}

export default SignUp;