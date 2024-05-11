import styled from "@emotion/styled";

export const Header1 = styled.header`

    height: 1400px;
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
    margin-bottom: 10px;
    &:hover {
        opacity: 0.5;
    }
  `;
  
export const Info = styled.section `
    height: 400px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 33px;
  `;
  
export const Text = styled.div `
    height: 500px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    cursor: default;
  `;
  
export const Slider = styled.article `
    position: relative;
    text-align: center;
    top: 10px;
    margin: 0 auto;
    max-width: 800px;
    max-height: 515px; 
    margin-bottom: 400px;
  `;
  
export const Art = styled.article` 
  width: 100%;
  float: left;
  `;
  
export const Image = styled.image ` 
  width: 500%;
  line-height: 0;
  `;
  
export const Overflow = styled.div `
  width: 100%;
  overflow: hidden;
  `;
  
export const Im = styled.img`
  width: 50%;
  border-radius: 7dvh;
  `;