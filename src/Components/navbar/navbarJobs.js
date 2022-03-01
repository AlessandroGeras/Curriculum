import styled,{keyframes} from "styled-components";
import WebFont from "webfontloader";
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { jobbutton,skillbutton } from "../../Redux/actions/actionsButtons";

WebFont.load({
  google: {
    families: ["Roboto"],
  },
});

const Jobs = () => {
  const jobReducer = useSelector((state) => state.button);
  const dispatch = useDispatch();

const changeButtonJobs = () =>{
  dispatch(jobbutton(false));
  dispatch(skillbutton(true));
}

const changeButtonIndex = () =>{
  dispatch(jobbutton(true));
  dispatch(skillbutton(true));
}

useEffect(() => {  
    if(window.location.pathname==="/Jobs"){
      dispatch(jobbutton(false));
      dispatch(skillbutton(true));
    }
    else{     
      dispatch(jobbutton(true));
    }    
    
},[] );



  return (
    <div>
      <Lista>
        <li className={jobReducer.job===true ? "show" : "hide"}><Link to="/Jobs" onClick={changeButtonJobs}>
         <Fa><FaTools /></Fa>Jobs</Link>
        </li>
        <li className={jobReducer.job===false ? "show" : "hide"}><Link to="/" onClick={changeButtonIndex}>
         Home</Link>
        </li>
      </Lista>
    </div>
  );
};

const JobsAnimation = keyframes`
0%   {background-position:0% 0%}
100% {background-position:100% 100%}
`;

const JobsAnimationReverse = keyframes`
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
background-color: blue;
background-image: linear-gradient(-25deg, blue 5%, #a5e5ff 100%);
color:white;
font-family: font-family: 'Roboto', sans-serif;
letter-spacing: 1px;
font-weight:500;
clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%, 0 60%);
margin:auto;
animation-name: ${JobsAnimationReverse};
animation-duration: 1s;
animation-fill-mode: forwards;
};

a:hover{animation-name: ${JobsAnimation};
animation-duration: 1s;
animation-fill-mode: forwards;}
`;

const Fa = styled.div`
margin-right:7.5px;
`;

export default Jobs;
