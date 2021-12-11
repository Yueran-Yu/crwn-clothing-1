import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  text-align: center;
`

export const ContactForm = styled.div`
  margin: 50px 0;


  label {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;


    input {
      margin: 10px 0;
      border-radius: 5px;
      height: 30px;
      border: solid 1px grey;
    }

    textarea {
      margin: 10px 0;
      border-radius: 5px;
      border: solid 1px grey;
      height: 80px;
    }
  }

  .submit {
    text-transform: uppercase;
    border: none;
    width: 140px;
    height: 50px;
    margin-top: 30px;
    background-color: #96bcff;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    color: white;
    border-radius: 5px;
  }
`

export const Frame = styled.div`
  height: 400px;
`

export default Wrapper;