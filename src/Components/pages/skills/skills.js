import styled from "styled-components";
import WebFont from "webfontloader";
import React from "react";
import "../../../Assets/style.scss";


const Skills = () => {

  WebFont.load({
    google: {
      families: ["Crete Round"],
    },
  });

  return (
    <div>
      <BackGround>
      <article>
		<h3>Social Media</h3>
		<p>We bring the people of the world together so you can watch them tear each other apart.</p>
	</article>
	<article>
		<h3>Foresight</h3>
		<p>Those who say it cannot be done should not interrupt those busy proving them right.</p>
	</article>


      </BackGround>
      
    </div>
  );
};

const BackGround = styled.div`
  `;


export default Skills;
