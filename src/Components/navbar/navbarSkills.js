import styled, {keyframes} from "styled-components";
import WebFont from "webfontloader";
import { HiAcademicCap } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { jobbutton,skillbutton } from "../../Redux/actions/actionsButtons";

WebFont.load({
  google: {
    families: ["Roboto"],
  },
});

const Skills = () => {
  const skillReducer = useSelector((state) => state.button);
  const dispatch = useDispatch();
  
  const changeButtonSkills = () =>{
    dispatch(skillbutton(false));
    dispatch(jobbutton(true));
  }
  
  const changeButtonIndex = () =>{
    dispatch(skillbutton(true));
    dispatch(jobbutton(true));
  }

  useEffect(() => {
    if(window.location.pathname==="/Skills"){
      dispatch(skillbutton(false));
      dispatch(jobbutton(true));
    }
    else{
      dispatch(skillbutton(true));
    }
}, []);



  return (
    <div>
      <Lista>
      <li className={skillReducer.skill===true ? "show" : "hide"}><Link to="/Skills" onClick={changeButtonSkills}>
         <Fa><HiAcademicCap /></Fa>Skills</Link>
        </li>
        <li className={skillReducer.skill===false ? "show" : "hide"}><Link to="/" onClick={changeButtonIndex}>
         Home</Link>
        </li>
      </Lista>
    </div>
  );
};

const SkillsAnimation = keyframes`
0%   {background-position:0% 0%}
100% {background-position:100% 100%}
`;

const SkillsAnimationReverse = keyframes`
0%   {background-position:100% 100%}
100% {background-position:0% 0%}
`;

const Lista = styled.ul`
float:right;
display:flex;
list-style-type:none;  
height:calc(20px + 1.7vw);
margin:0;
padding:0;


li.hide{display:none}

li.show{display:initial}

a{display:flex;
align-items: center; 
padding-left:calc(35px + 1.6vw);
padding-right:calc(35px + 1.6vw);
height:100%;
background-position:0% 0%;
background-size:100% 200%;
background-color:red;
background-image: linear-gradient(-25deg, red 5%, yellow 100%);
color:white;
font-family: font-family: 'Roboto', sans-serif;
letter-spacing: 1px;
font-weight:500;
clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%, 0 60%);
margin:auto;
animation-name: ${SkillsAnimationReverse};
animation-duration: 1s;
animation-fill-mode: forwards;
};

a:hover{animation-name: ${SkillsAnimation};
animation-duration: 1s;
animation-fill-mode: forwards;}
`;

const Fa = styled.div`
margin-right:7.5px;
`;

export default Skills;
