import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SignInWrapper = styled.div`
  width: 380px;
  margin: 30px auto;
  padding: 0 14px;

`

export const SignInTitle = styled.h2`
  margin: 10px 0;
  text-align: center;
`

export const PTag = styled.p`
  text-align: center;
`

export const ButtonBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    font-size: 13px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    gap: 20px;
    max-width: 300px;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #1b6ae7;
`

export const SignUpWrapper = styled.div`
  margin: 10px 0;
  text-align: center;
`

