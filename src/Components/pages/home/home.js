import styled from "styled-components";
import About from "./about";
import Speech from "./speech";
import Tags from "./tags";

const section = () => {
  return (
    <div>
      <BackgroundOne>
        <ContainerLeft>
          <img src="https://avatars.githubusercontent.com/u/96837746?v=4" />
          <Speech />
        </ContainerLeft>
        <ContainerRight>
          <About />
        </ContainerRight>
        <ContainerDown>
          <Tags />
        </ContainerDown>
      </BackgroundOne>
      <BackgroundTwo></BackgroundTwo>
    </div>
  );
};

const BackgroundOne = styled.div`
  height: 60vh;
  background: linear-gradient(110deg, #fdcd3b 65%, #ffed4b 65%);

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    height: 100%;
    padding-bottom: 7.5%;
    background-image: linear-gradient(to bottom, #fdcd3b, #ffed4b);
  }

  @media screen and (max-width: 925px) and (min-height: 1100px) {
    height: 100vh;
  }
`;

const BackgroundTwo = styled.div`
  height: 60vh;
  padding-bottom:25%;
  background: linear-gradient(110deg, #fdcd3b 65%, #ffed4b 65%);

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-height: 800px) {
    height: 45vh;
  }

  @media screen and (max-height: 600px) {
    height: 70vh;
  }
`;

const ContainerLeft = styled.div`
  float: left;
  width: 70%;

  img {
    padding-top: 1.5%;
    float: left;
    border-radius: 50%;
    width: 300px;
    margin-left: 2.5%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    img {
      width: 200px;
      margin-top: 2.5%;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    float: none;
    img {
      padding-top: 1.5%;
      float: none;
      display: block;
      margin: 0 auto;
    }
  }
`;

const ContainerRight = styled.div`
  float: right;
  margin-top: 7.5%;
  text-align: center;
  width: 30%;

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    float: none;
    width: 100%;
    margin-top: -7%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 450px) {
    margin-top: -1%;
  }
`;

const ContainerDown = styled.div`
  float: left;
  width: 65%;
  margin-top: 5%;

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    margin-top: 9%;
  }

  @media screen and (max-width: 1000px) {
    float: none;
    width: 100%;
    margin-left: 0;
    margin-top: 5%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 450px) {
    margin-top: 10%;
  }
`;

export default section;
