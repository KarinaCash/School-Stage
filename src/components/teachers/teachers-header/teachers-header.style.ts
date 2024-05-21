import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Header1 = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.a`
  margin-top: 10px;
  height: 66px;
  width: 65px;
  margin-left: auto;
  margin-right: 20px;
  margin-bottom: 5px; /* Adjusted margin-bottom */
  &:hover {
    opacity: 0.5;
  }
`;

export const Info = styled.section`
  height: 350px; /* Adjusted height */
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 33px;
`;

export const Text = styled.div`
  height: 480px; /* Adjusted height */
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  cursor: default;
  margin-bottom: 10px; /* Adjusted margin-bottom */
`;

export const Slider = styled.article`
  position: relative;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  margin-bottom: 10px; /* Adjusted margin-bottom */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Art = styled.div`
  width: 100%;
`;

export const Image = styled.div`
  margin: 20px 0;
  width: 100%;
  height: auto;
  opacity: 0; /* Начальная прозрачность */
  animation: ${fadeIn} 0.5s ease forwards; /* Анимация появления */
`;

export const Im = styled.img`
  width: 100%;
  height: 800px; /* Adjusted height */
  border-radius: 7px;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const PrevButton = styled(Button)`
  margin-right: 10px;
`;

export const NextButton = styled(Button)`
  margin-left: 10px;
`;
