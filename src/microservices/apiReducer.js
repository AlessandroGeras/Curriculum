import ApiSpeech from "./apiSpeech";
import ApiAbout from "./apiAbout";
import ApiTags from "./apiTags";
import ApiJobs from "./apiJobs";
import ApiCourses from "./apiCourses";
import ApiCertifications from "./apiCertifications";
import ApiBootcamps from "./apiBootcamps";
import ApiProjects from "./apiProjects";

const ApiReducer = () => {
  return (
    <div>
      <ApiSpeech />
      <ApiAbout />
      <ApiTags />
      <ApiJobs />
      <ApiCourses />
      <ApiCertifications />
      <ApiBootcamps />
      <ApiProjects />
    </div>
  );
};

export default ApiReducer;
