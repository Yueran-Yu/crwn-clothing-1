import styled from "styled-components";


const Wrapper = styled.div`
  .test {
    font-size: 10px;
    position: fixed;
    bottom: 50px;
    right: 3rem;
    background: hsl(0, 0%, 49%);
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    color: #fff;
    animation: bounce 2s ease-in-out infinite;
    z-index: 10;
    border: none;

    @media (max-width: 1000px) {
      right: 5px;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }`

export default Wrapper;