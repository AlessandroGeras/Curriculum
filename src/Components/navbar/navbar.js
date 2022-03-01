import styled from "styled-components";
import Jobs from "./navbarJobs";
import Skills from "./navbarSkills";

const navbar = () => {
  return (
    <div>
      <Navbarbody>
        <div>
          <Skills />
        </div>
        <div>
          <Jobs />
        </div>
      </Navbarbody>
    </div>
  );
};

const Navbarbody = styled.div`
  background: #4a5668;
  height:calc(20px + 1.7vw);
`;

export default navbar;
