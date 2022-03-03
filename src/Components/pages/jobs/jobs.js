import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import WebFont from "webfontloader";

const Jobs = () => {
  const jobsReducer = useSelector((state) => state.jobReducer.jobs);

  WebFont.load({
    google: {
      families: ["Crete Round"],
    },
  });

  return (
    <div>
      <BackGround>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Container>
          {jobsReducer.map((itemlist, itemlistindex) => (
            <div key={itemlistindex}>
              {" "}
              <Ribbon>
                <h2>{itemlist.job}</h2>
                <br /> 
                <h4>{itemlist.role}</h4>
                <p>Skills - {itemlist.skills}</p>
                <p>
                  Start - {itemlist.start}
                  <br />
                  End - {itemlist.end}
                </p>
              </Ribbon>
            </div>
          ))}
        </Container>
      </BackGround>
    </div>
  );
};

const Slide = keyframes`
0% {
  transform:translateX(-25%);
}
100% {
  transform:translateX(25%);
}
`;

const BackGround = styled.div`
  height: 100%;
  padding-top: 3.5%;
  padding-bottom: 1%;
  margin: 0;

  .bg {
    animation: ${Slide} 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg,  #fdcd3b 50%, #ffed4b 50%);
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }

  .content {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.25em;
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    left: 50%;
    padding: 10vmin;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-family: monospace;
  }
`;

const Container = styled.div`
  margin: 0;
`;

const Ribbon = styled.div`
  background: #e6e2c8;
  width: 35%;
  max-width: 960px;
  min-height: 3.75em;
  margin: 0 auto;
  margin-bottom: 2.5%;
  padding: 1em;
  border-radius: 0.313em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  line-height: 1.5em;
  color: #292929;

  h2,
  h4 {
    font-family: "Crete Round", serif;
  }

  h2 {
    position: relative;
    padding: 0 0.5em;
    font-size: 1.25em;
    margin: 0 0 0 -0.625em;
    line-height: 1.875em;
    color: #e6e2c8;
    border-radius: 0 0.156em 0.156em 0;
    background: rgb(123, 159, 199);
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.5);
  }

  h2:before,
  h2:after {
    position: absolute;
    content: "";
    display: block;
  }

  h2:before {
    width: 0.469em;
    height: 100%;
    padding: 0 0 0.438em;
    top: 0;
    left: -0.469em;
    background: inherit;
    border-radius: 0.313em 0 0 0.313em;
  }

  h2:after {
    width: 0.313em;
    height: 0.313em;
    background: rgba(0, 0, 0, 0.35);
    bottom: -0.313em;
    left: -0.313em;
    border-radius: 0.313em 0 0 0.313em;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    width: 70%;
  }

  @media screen and (max-width: 460px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    h2 {
      line-height: 1.143em;
      padding: 0.5em;
      font-size: 1.25em;
    }

    h2:before,
    h2:after {
      font-size: 0.714em;
    }
  }
`;

export default Jobs;
