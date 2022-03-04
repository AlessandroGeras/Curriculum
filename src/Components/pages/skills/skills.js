import styled from "styled-components";
import "../../../Assets/style.scss";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";


const Skills = () => {
  const coursesReducer = useSelector((state) => state.courseReducer.courses);
  const certificationsReducer = useSelector((state) => state.certificationReducer.certifications);
  const bootcampsReducer = useSelector((state) => state.bootcampReducer.bootcamps);
  const projectsReducer = useSelector((state) => state.projectReducer.projects);

  

  WebFont.load({
    google: {
      families: ["Architects Daughter"],
    },
  });
 

  return (
    <div>
      <BackGround>

        <Projects>
        {projectsReducer.map((projectitemlist, projectitemlistindex) => (
            <div key={projectitemlistindex}>
              {" "}
              <article>
                <h3>{projectitemlist.type}</h3>
                <h4>{projectitemlist.project}</h4>
                <br />
                {projectitemlist.live !=="null" && <div><h5>Ver Projeto Online: <a href={projectitemlist.live} target="_blank">Link</a></h5></div>}

                <div><h5>Frontend Files: <a href={projectitemlist.linkfrontend} target="_blank">Link</a></h5></div>
               
                {projectitemlist.linkbackend !=="null" && <div><h5>Backend Files: <a href={projectitemlist.linkbackend} target="_blank">Link</a></h5></div>}
                </article>
            </div>
          ))}




        </Projects>

        <Courses>
        {coursesReducer.map((courseitemlist, courseitemlistindex) => (
            <div key={courseitemlistindex}>
              {" "}
              <article className={courseitemlist.type}>
                <h3>{courseitemlist.type}</h3>
                <h4>{courseitemlist.course}</h4>
                <br />
                <p>{courseitemlist.place}</p>
                <br />
                <p>{courseitemlist.issuedate}</p>
                </article>
            </div>
          ))}
          </Courses>

          <Bootcamps>

          {bootcampsReducer.map((bootcampitemlist, bootcampitemlistindex) => (
            <div key={bootcampitemlistindex}>
              {" "}
              <article className={bootcampitemlist.type}>
                <h3>{bootcampitemlist.type}</h3>
                <h4>{bootcampitemlist.bootcamp}</h4>
                <br />
                <p>{bootcampitemlist.workload}</p>
                <br />
                <p>{bootcampitemlist.issuedate}</p>
                <a className="certificado" href={bootcampitemlist.link} target="_blank">Certificado</a>
                </article>
            </div>
          ))}


          </Bootcamps>



          <Certifications>

{certificationsReducer.map((certificationitemlist, certificationitemlistindex) => (
            <div key={certificationitemlistindex}>
              {" "}
              <article className={certificationitemlist.category}>
                <h3>{certificationitemlist.type}</h3>
                <h4>{certificationitemlist.category}</h4>
                <br />
                <p>{certificationitemlist.certification}</p>
                <a className="certificado" href={certificationitemlist.link} target="_blank">Certificado</a>
                </article>
            </div>
          ))}



</Certifications>


      </BackGround>
      
    </div>
  );
};

const BackGround = styled.div`
background-image: linear-gradient(45deg, rgb(240, 99, 99) 0%, rgb(240, 99, 99) 11%,rgb(230, 115, 107) 11%, rgb(230, 115, 107) 24%,rgb(220, 132, 114) 24%, rgb(220, 132, 114) 29%,rgb(210, 148, 122) 29%, rgb(210, 148, 122) 45%,rgb(199, 164, 129) 45%, rgb(199, 164, 129) 87%,rgb(189, 181, 137) 87%, rgb(189, 181, 137) 90%,rgb(179, 197, 144) 90%, rgb(179, 197, 144) 100%),linear-gradient(67.5deg, rgb(240, 99, 99) 0%, rgb(240, 99, 99) 11%,rgb(230, 115, 107) 11%, rgb(230, 115, 107) 24%,rgb(220, 132, 114) 24%, rgb(220, 132, 114) 29%,rgb(210, 148, 122) 29%, rgb(210, 148, 122) 45%,rgb(199, 164, 129) 45%, rgb(199, 164, 129) 87%,rgb(189, 181, 137) 87%, rgb(189, 181, 137) 90%,rgb(179, 197, 144) 90%, rgb(179, 197, 144) 100%),linear-gradient(135deg, rgb(240, 99, 99) 0%, rgb(240, 99, 99) 11%,rgb(230, 115, 107) 11%, rgb(230, 115, 107) 24%,rgb(220, 132, 114) 24%, rgb(220, 132, 114) 29%,rgb(210, 148, 122) 29%, rgb(210, 148, 122) 45%,rgb(199, 164, 129) 45%, rgb(199, 164, 129) 87%,rgb(189, 181, 137) 87%, rgb(189, 181, 137) 90%,rgb(179, 197, 144) 90%, rgb(179, 197, 144) 100%),linear-gradient(90deg, rgb(156, 174, 7),rgb(129, 53, 44)); background-blend-mode:overlay,overlay,overlay,normal;
padding-top:2.5%;
font-family: 'Architects Daughter', cursive;
  `;

  const Projects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  `;

  const Courses = styled.div`
  margin-top:5%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  `;

  const Certifications = styled.div`
  margin-top:5%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  `;

  const Bootcamps = styled.div`
  margin-top:5%;
  display: grid;
  grid-template-columns: auto;
  `;

export default Skills;
