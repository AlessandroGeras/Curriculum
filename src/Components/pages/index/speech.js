import styled from "styled-components";
import { GoQuote } from "react-icons/go";
import { IconContext } from "react-icons";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";

const Speech = () => {
  const speechReducer = useSelector((state) => state.speech);

  WebFont.load({
    google: {
      families: ["Great Vibes"],
    },
  });

  return (
    <div>
      <Main>
        <Container>
          <Fa>
            <IconContext.Provider
              value={{ color: "white", size: "17.5px", margin: "0px",padding:"0px",float:"right" }}
            >
              <div>
                <GoQuote />
              </div>
            </IconContext.Provider>
          </Fa>
          <Text>
            {speechReducer.speechone}
            <br />
            <br />
            {speechReducer.speechtwo}
            <br />
            <br />
            {speechReducer.speechthree}
          </Text>
          <Signature>Geras</Signature>
          <ContainerColor></ContainerColor>
        </Container>
      </Main>
    </div>
  );
};

const Main = styled.div`
  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
  }
`;

const Container = styled.div`
  float: left;
  margin: 1.5% 0 0 0;
  width: 450px;
  height: 280px;
  background: #26272b;
  color: white;
  clip-path: polygon(7% 80%, 7% 0, 100% 0, 100% 100%, 7% 100%, 7% 90%, 0 80%);

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    width: 425px;
    height: 235px;
  }

  @media screen and (max-width: 1000px) {
    float: left;
    height: 260px;
    display: block;
    margin: auto;
    margin-top:2.5%;
    clip-path: polygon(38% 0, 38% 13%, 100% 13%, 100% 100%, 0 100%, 0 13%, 31% 13%);
  }

  @media screen and (max-width: 450px) {
    height: 280px;
  }

  @media screen and (max-width: 280px) {
    height: 330px;
  }
`;

const ContainerColor = styled.div`
  float: right;
  position: relative;
  margin:0px;
  padding:0px;
  top: -7%;
  width: 2%;
  height: 100%;
  background: #b388dd;
  color: white;

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    top: -8.5%;
  }

  @media screen and (max-width: 1000px) {
    top: -6.5%;
  }

  @media screen and (max-width: 280px) {
    top: -6%;
  }
`;

const Fa = styled.div`
  margin: 0px;
  padding: 0px;
  width: 5%;
  position: relative;
  top: 7%;
  left: 10%;

  @media screen and (max-width: 1000px) {
    top:20%;
    left: 5.5%;
   }
`;

const Text = styled.div`
  float: left;
  position: relative;
  width: 80%;
  text-align: justify;
  top: 6%;
  left: 13.5%;

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
   top:20%;
   left: 9.5%;
  }
`;

const Signature = styled.div`
  float: left;
  position: relative;
  width: 10%;
  text-align: justify;
  right:-2.5%;
  top: 75%;
  font-family: "Great Vibes", cursive;
  font-size: 25px;

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    font-size: 25px;
    right:2%;
  }

  @media screen and (max-width: 280px) {
    top: 80.5%;
    right:7.5%;
  }
`;

export default Speech;
