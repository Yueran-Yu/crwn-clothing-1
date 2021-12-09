import styled from "styled-components";

const Wrapper = styled.div`
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: start;
    margin-left: 5%;

    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }

  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    color: #4c4c4c;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: #a0a0a0;
  }

  .paginationActive a {
    color: black;
    background-color: #ececec;
  }

  .paginationDisabled a {
    color: black;
    font-weight: bolder;
  }
`

export default Wrapper;