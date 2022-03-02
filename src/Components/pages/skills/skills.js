import styled from "styled-components";
import "../../../Assets/style.scss";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";


const Skills = () => {
  const coursesReducer = useSelector((state) => state.coursereducer.courses);
  const certificationsReducer = useSelector((state) => state.certificationreducer.certifications);

  

  WebFont.load({
    google: {
      families: ["Architects Daughter"],
    },
  });
 

  return (
    <div>
      <BackGround>

        <Courses>
        {coursesReducer.map((courseitemlist, courseitemlistindex) => (
            <div key={courseitemlistindex}>
              {" "}
              <article>
                <h3>{courseitemlist.courses}</h3>
                <h4>{courseitemlist.course}</h4>
                <br />
                <p>{courseitemlist.place}</p>
                </article>
            </div>
          ))}
          </Courses>

          <Certifications>

{certificationsReducer.map((certificationitemlist, certificationitemlistindex) => (
            <div key={certificationitemlistindex}>
              {" "}
              <article className={certificationitemlist.type}>
                <h3>{certificationitemlist.certifications}</h3>
                <h4>{certificationitemlist.type}</h4>
                <br />
                <p>{certificationitemlist.certification}</p>
                <a href={certificationitemlist.link} target="_blank">Certificado</a>
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

  const Courses = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  `;

  const Certifications = styled.div`
  margin-top:5%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  `;

export default Skills;
