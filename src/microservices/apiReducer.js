import ApiSpeech from './apiSpeech';
import ApiAbout from './apiAbout';
import ApiTags from './apiTags';
import ApiJobs from './apiJobs';
import ApiCourses from "./apiCourses";
import ApiCertifications from "./apiCertifications";

const ApiReducer = () =>{
    return(
<div>
<ApiSpeech />
    <ApiAbout />
    <ApiTags />
    <ApiJobs />   
    <ApiCourses /> 
    <ApiCertifications /> 
</div>
    );
};

export default ApiReducer;