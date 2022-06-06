import styled from "styled-components";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";

const About = () => {
  const aboutReducer = useSelector((state) => state.about);

  WebFont.load({
    google: {
      families: ["Roboto"],
    },
  });

  return (
    <div>
      <Container>
        <Title>Sobre Mim</Title>
        <Text>
          {aboutReducer.aboutone}
          <br />
          <br />
          {aboutReducer.abouttwo}
          <br />
          <br />
          {aboutReducer.aboutthree}
          <br />
          <br />
          {aboutReducer.aboutfour}
        </Text>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  color: #45454b;
  text-align: center;
  margin-bottom: 5%;

  @media screen and (max-width: 1250px) {
    font-size: 25px;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    font-size: 20px;
    margin-bottom: 1.5%;
  }
`;

const Text = styled.div`
  text-align: justify;
  color: #7e7e7e;
  font-family: "Roboto", sans-serif;

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    text-align: center;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    font-size: 15px;
    text-align: center;
  }
`;

const Container = styled.div`
  margin: 10% 5% 0 10%;
  
  @media screen and (max-width: 1000px) {
    margin: 10% 2.5% 0 2.5%;
  }
`;

export default About;
