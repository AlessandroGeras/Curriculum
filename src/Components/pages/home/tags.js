import styled from "styled-components";
import { useSelector } from "react-redux";
import Ribbon from "./ribbon";

const Tags = () => {
  const tagsReducer = useSelector((state) => state.tagReducer.tags);

  return (
    <div>
      <Main>
        <Container>
          {tagsReducer.map((itemlist, itemlistindex) => (
            <div key={itemlistindex}>
              {" "}
              <Tag className={itemlist.id}>{itemlist.tag}</Tag>
            </div>
          ))}
        </Container>
        <Container className="ribbon">
          <Ribbon />
        </Container>
      </Main>
    </div>
  );
};

const Main = styled.div`
  position: absolute;
  left: 0;
  width: 575px;

  /*########## Mobile##########*/
  @media screen and (max-width: 1300px) {
    width: 470px;
  }
  @media screen and (max-width: 1000px) {
    position: static;
    display: block;
    margin: auto;
    width: 100%;
  }
`;

const Container = styled.div`
  box-sizing:initial;
  width: 200px;
  display: grid;  
  grid-column-gap: 12.5%;
  grid-template-columns: auto auto auto;
  align-items: center;  
  text-align:center;
  margin-left:0;

  &.ribbon{grid:none;
    width:100%;
    margin:0 auto;}

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 0%;
    width:100%;
    margin-bottom:5%;

    @media screen and (max-width: 650px) {
      grid-template-columns: auto auto auto;
      width:100%;
      }
`;

const Tag = styled.h2`
  padding:2.5px;
  margin: -2% 0% 5% 0%;
  width: 105%;
  font-size: 23px;

  &.random0 {
    background: #555e25;
    border-radius: 25px;
    border: 2.5px solid #9ba950;
    color: #9ba950;
  }

  &.random1 {
    background: repeating-linear-gradient(
      115deg,
      white,
      white 10px,
      #d2d2d2 5px,
      #d2d2d2 11px
    );
    border-radius: 25px;
    color: #4d4d4d;
  }

  &.random2 {
    background-image: linear-gradient(red, #f06d06);
    border-radius: 25px;
    color: #fdbb2f;
  }

  &.random3 {
    background-image: linear-gradient(to right, black, silver 50%, black);
    border-radius: 25px;
    color: white;
    border: 2.5px solid silver;
  }

  &.random4 {
    background-image: radial-gradient(red, purple);
    border-radius: 25px;
    color: purple;
  }

  &.random5 {
    background-image: linear-gradient(
      to right,
      blue,
      black 25%,
      blue,
      black 75%,
      blue
    );
    color: #90753a;
  }

  &.random6 {
    background-image: repeating-linear-gradient(
      0deg,
      pink,
      pink 1px,
      #dc4d9e 10px,
      #dc4d9e 13px
    );
    color: blue;
  }

  &.random7 {
    background: repeating-radial-gradient(circle at 50% 50%, #eee, #ccc 10px);
    color: green;
  }

  &.random8 {
    background: linear-gradient(to right, black, transparent),
      url(https://grainy-gradients.vercel.app/noise.svg);
    filter: contrast(170%) brightness(1000%);
    color: red;
  }

  &.random9 {
    background-color: hsl(2, 57%, 40%);
    background-image: repeating-linear-gradient(
        transparent,
        transparent 50px,
        rgba(0, 0, 0, 0.4) 50px,
        rgba(0, 0, 0, 0.4) 53px,
        transparent 53px,
        transparent 63px,
        rgba(0, 0, 0, 0.4) 63px,
        rgba(0, 0, 0, 0.4) 66px,
        transparent 66px,
        transparent 116px,
        rgba(0, 0, 0, 0.5) 116px,
        rgba(0, 0, 0, 0.5) 166px,
        rgba(255, 255, 255, 0.2) 166px,
        rgba(255, 255, 255, 0.2) 169px,
        rgba(0, 0, 0, 0.5) 169px,
        rgba(0, 0, 0, 0.5) 179px,
        rgba(255, 255, 255, 0.2) 179px,
        rgba(255, 255, 255, 0.2) 182px,
        rgba(0, 0, 0, 0.5) 182px,
        rgba(0, 0, 0, 0.5) 232px,
        transparent 232px
      ),
      repeating-linear-gradient(
        270deg,
        transparent,
        transparent 50px,
        rgba(0, 0, 0, 0.4) 50px,
        rgba(0, 0, 0, 0.4) 53px,
        transparent 53px,
        transparent 63px,
        rgba(0, 0, 0, 0.4) 63px,
        rgba(0, 0, 0, 0.4) 66px,
        transparent 66px,
        transparent 116px,
        rgba(0, 0, 0, 0.5) 116px,
        rgba(0, 0, 0, 0.5) 166px,
        rgba(255, 255, 255, 0.2) 166px,
        rgba(255, 255, 255, 0.2) 169px,
        rgba(0, 0, 0, 0.5) 169px,
        rgba(0, 0, 0, 0.5) 179px,
        rgba(255, 255, 255, 0.2) 179px,
        rgba(255, 255, 255, 0.2) 182px,
        rgba(0, 0, 0, 0.5) 182px,
        rgba(0, 0, 0, 0.5) 232px,
        transparent 232px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.2) 2px,
        rgba(0, 0, 0, 0.2) 3px,
        transparent 3px,
        transparent 5px,
        rgba(0, 0, 0, 0.2) 5px
      );
    color: red;
  }

  &.random10 {
    text-shadow: 0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878,
      -3px 7px 1px #7a7a7a;
  }

  &.random11 {
    text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
      -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
    color: #cfc547;
  }

  &.random12 {
    margin-top:-5%;
    text-shadow: 2px 3px 7px white, 0 5px 1px blue;
    color: red;
  }

  &.random13 {
    text-shadow: -1px 1px 0 #41ba45, 1px 1px 0 #c63d2b, 1px -1px 0 #42afac,
      -1px -1px 0 #c6c23f;
    color: #fdcd3b;
  }

  &.random14 {
    text-shadow: 20px 10px 0px #ff99cc, -15px -6px 0px #64a5b7;
    color: white;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }

  @media screen and (max-width: 380px) {
    font-size: 11.75px;
  }

  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;

export default Tags;
