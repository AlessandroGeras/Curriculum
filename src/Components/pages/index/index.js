import styled from "styled-components";
import About from "./about";
import Speech from "./speech";
import Tags from "./tags";

const section = () => {
  return (
    <div><BackgroundOne>
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
height:60vh;
background: linear-gradient(110deg, #fdcd3b 65%, #ffed4b 65%);
 
  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    height:140vh;
    background-image: linear-gradient(
      to bottom,
      #fdcd3b,
      #ffed4b
    );
  }
  
 @media screen and (max-height: 1400px) {
  height:100vh;
}

@media screen and (max-height: 1050px) {
  height:105vh;
}

@media screen and (max-width:1000px) and (max-height: 950px) {
  height:130vh;
}

@media screen and (max-height: 875px) {
  height:130vh;
}

@media screen and (max-height: 800px) {
  height:60vh;
}

@media screen and (max-width:2000px) and (max-height: 800px) {
  height:70vh;
}

@media screen and (max-width:1300px) and (max-height: 800px) {
  height:60vh;
}

@media screen and (max-width:1000px) and (max-height: 800px) {
  height:140vh;
}

@media screen and (max-width:550px) and (max-height: 750px) {
  height:150vh;
}

@media screen and (max-width:450px) and (max-height: 950px) {
  height:130vh;
}

@media screen and (max-width:400px) and (max-height: 750px) {
  height:145vh;
}

@media screen and (max-width:400px) and (max-height: 670px) {
  height:165vh;
}

@media screen and (max-width:400px) and (max-height:875px) {
  height:135vh;
}

@media screen and (max-width:380px) and (max-height:700px) {
  height:170vh;
}

@media screen and (max-width:370px) and (max-height:750px) {
  height:155vh;
}

@media screen and (max-width:300px) and (max-height: 670px) {
  height:185vh;
}
`;

const BackgroundTwo = styled.div`
height:60vh;
background: linear-gradient(110deg, #fdcd3b 65%, #ffed4b 65%);

/*########## Mobile##########*/
@media screen and (max-width: 1000px) {
  height:70vh;
}

@media screen and (max-width: 1000px) {
  display:none;
 }

 @media screen and (max-height: 800px) {
  height:40vh;
}

@media screen and (max-height: 600px) {
  height:60vh;
}
`;

const ContainerLeft = styled.div`
  float: left;
  width: 70%;
  margin: 1.5% 0 0 0;

  img {
    float: left;
    border-radius: 50%;
    width: 300px;
    margin-left:2.5%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1250px) {
    img {
      width: 200px;
      margin-top:2.5%;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      float:none;
      display:block;
      margin:0 auto;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ContainerRight = styled.div`
  float: right;
  margin-top:7.5%;
  text-align: center;
  width: 30%;  

  /*########## Mobile##########*/
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top:-7%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 450px) {
    margin-top:-1%;
  }
`;

const ContainerDown = styled.div`
float:left;
width:65%;
margin-left:1%;
margin-top:5%;

/*########## Mobile##########*/
@media screen and (max-width: 1250px) {
  margin-top:9%;
}

@media screen and (max-width: 1000px) {
  margin-top:40px;
}

@media screen and (max-width: 1000px) {  
  width:100%;
  margin-top:5%;
}

/*########## Mobile##########*/
  @media screen and (max-width: 450px) {
    margin-top:10%;
  }

`;

export default section;
