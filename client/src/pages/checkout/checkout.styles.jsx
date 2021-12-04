import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 0;

  @media screen and (max-width: 800px) {
    width: 82%;
    font-size: 13px;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;

  &:last-child {
    width: 8%;

    @media screen and (max-width: 800px) {
      width: 10%;
    }
  }
`

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`

export const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  color: red;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`