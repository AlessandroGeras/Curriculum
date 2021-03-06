import styled from "styled-components";

const Ribbon = () => {
  return (
    <div>
      <Container>
        <span className="text">
          Colaborador do projeto open source <br/>
          <strong className="bold">O Bom Professor <br />Gestão do Ensino com Excelência</strong> <br />
          <a href="https://www.youtube.com/watch?v=Gp7ntL1encQ" target="_blank">Mais informações</a>
        </span>
      </Container>
    </div>
  );
};

const Container = styled.p`
  float: left;
  margin-top:10%;
  margin-bottom: 13.5%;

  .ribbon {
    position: relative;
    display: inline-block;
    margin: 5em;
    text-align: center;
  }
  .text {
    display: inline-block;
    padding: 0.5em 1em;
    line-height: 1.2em;
    background: #ffd72a;
    position: relative;
    font-size: 15px;
  }
  .ribbon:after,
  .ribbon:before,
  .text:before,
  .text:after,
  .bold:before {
    content: "";
    position: absolute;
    border-style: solid;
  }
  .ribbon:before {
    top: 0.3em;
    left: 0.2em;
    width: 100%;
    height: 100%;
    border: none;
    background: #ebeced;
    z-index: -2;
  }
  .text:before {
    bottom: 100%;
    left: 0;
    border-width: 0.5em 0.7em 0 0;
    border-color: transparent #fc9544 transparent transparent;
  }
  .text:after {
    top: 100%;
    right: 0;
    border-width: 0.5em 2em 0 0;
    border-color: #fc9544 transparent transparent transparent;
  }
  .ribbon:after,
  .bold:before {
    top: 0.5em;
    right: -2em;
    border-width: 1.1em 1em 1.1em 3em;
    border-color: #fecc30 transparent #fecc30 #fecc30;
    z-index: -1;
  }
  .bold:before {
    border-color: #ebeced transparent #ebeced #ebeced;
    top: 0.7em;
    right: -2.3em;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1375px) {
    .text {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 1000px) {
    float: none;    
  margin-bottom:0;
    .text {
      font-size: 13.75px;
    }
  }
  
  @media screen and (max-width: 415px) {
    margin-right:-7.5%;
  }

  @media screen and (max-width: 390px) {
    .text {
      font-size: 12px;
    }
  }
`;

export default Ribbon;
