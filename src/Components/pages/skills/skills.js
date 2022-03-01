import styled from "styled-components";
import WebFont from "webfontloader";

const Skills = () => {

  WebFont.load({
    google: {
      families: ["Crete Round"],
    },
  });

  return (
    <div>
      <BackGround>
        <div>

        </div>
		<h3>Social Media</h3>
		<p>We bring the people of the world together so you can watch them tear each other apart.</p>


      </BackGround>
      
    </div>
  );
};

const BackGround = styled.div`
background:mix(#fff, darkorange, 25%) padding-box;
  `;


export default Skills;
