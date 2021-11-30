import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compnent";
import {HomePageWrapper} from "../../pages/homepages/homepage.style";
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

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
    const {signUpStart} = this.props
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    signUpStart({displayName, email, password})
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <HomePageWrapper>
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
      </HomePageWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);