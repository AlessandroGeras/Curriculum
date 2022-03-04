import styled from "styled-components";
import WebFont from "webfontloader";
import { useSelector} from "react-redux";

const About = () => {
    const aboutReducer = useSelector((state) => state.about);

    WebFont.load({
        google: {
          families: ["Roboto"],
        },
      });     
   
  return <div>
      <Container>
      <Title>
          Sobre Mim
      </Title>
      <Text>
      {aboutReducer.aboutone}<br /><br/>{aboutReducer.abouttwo}<br /><br />{aboutReducer.aboutthree}<br /><br />{aboutReducer.aboutfour}
      </Text>
      </Container>

  </div>;
  
};

const Title = styled.h1`
color:#45454b;
text-align:center;
margin:0 5% 5% 32.5%;

@media screen and (max-width: 1250px) {
  font-size:25px;
  margin:0 5% 4.5% 32.5%;
}

/*########## Mobile##########*/
@media screen and (max-width: 1000px) {
  margin:0 5% 2% 5%;
  font-size:20px;
}

`;

const Text = styled.div`
text-align:justify;
margin:0 5% 0 15%;
margin:0 5% 0 30%;
color:#7e7e7e;
font-family:'Roboto', sans-serif;

/*########## Mobile##########*/
@media screen and (max-width: 1250px) {
  margin:0 5% 0 20%;
  margin:0 5% 0 30%;
  text-align:center;
}

/*########## Mobile##########*/
@media screen and (max-width: 1000px) {
  margin:0 5% 0 5%;
  font-size:15px;
  text-align:center;
}
`;

const Container = styled.div`
margin-top:10%;
`;




export default About;