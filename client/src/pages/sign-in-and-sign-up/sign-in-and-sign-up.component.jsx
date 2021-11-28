import React from 'react';
import {Wrapper} from './sign-in-and-sign-up.style';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <Wrapper>
    <SignIn/>
    <SignUp/>
  </Wrapper>
)

export default SignInAndSignUpPage;