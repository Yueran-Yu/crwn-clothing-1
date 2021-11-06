import React, {Component} from 'react';
import {Wrapper} from './sign-in.style';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState({email: '', password: ''})
  }

  handleChange = (event) => {
    console.log(event)
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
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </Wrapper>
    )
  }
}

export default SignIn;