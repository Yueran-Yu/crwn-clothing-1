import React, {Component} from 'react';
import {Wrapper} from './sign-in.style';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {email, password} = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }
  render() {
    return (
      <Wrapper>
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email}
                     required/>
          <FormInput name='password' type='password' label='password' handleChange={this.handleChange}
                     value={this.state.password} required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In With GOOGLE{''}</CustomButton>
          </div>
        </form>
      </Wrapper>
    )
  }
}

export default SignIn;