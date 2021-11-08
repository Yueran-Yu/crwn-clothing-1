import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {Wrapper} from "../../pages/homepages/homepage.style";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})
      this.state({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <Wrapper>
        <h2 className='title'> I do not have a account</h2>
        <span>Sign Up with your email and password.</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text'
                     name='displayName'
                     value={displayName}
                     onChange={this.handleChange}
                     label='Display Name' required/>

          <FormInput type='email'
                     name='email'
                     value={email}
                     onChange={this.handleChange}
                     label='Email' required/>

          <FormInput type='password'
                     name='password'
                     value={password}
                     onChange={this.handleChange}
                     label='Password' required/>

          <FormInput type='password'
                     name='confirmPassword'
                     value={confirmPassword}
                     onChange={this.handleChange}
                     label='Confirm Password' required/>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </Wrapper>
    )
  }
}

export default SignUp;