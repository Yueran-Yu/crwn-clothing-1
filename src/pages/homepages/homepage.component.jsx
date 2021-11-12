import React from 'react';
import {Wrapper} from "./homepage.style";
import Directory from "../../components/directory/directory.component";

const HomePage = ({match}) => {
  return (
    <Wrapper>
      <Directory/>
    </Wrapper>
  )
}

export default HomePage;