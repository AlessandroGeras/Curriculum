import speech from "./reducerSpeech";
import about from "./reducerAbout";
import tagReducer from "./reducerTags";
import jobReducer from "./reducerJobs";
import button from "./reducerButtons";
import courseReducer from "./reducerCourses";
import certificationReducer from "./reducerCertifications";
import bootcampReducer from "./reducerBootcamps";
import projectReducer from "./reducerProjects";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  speech,
  about,
  tagReducer,
  jobReducer,
  button,
  courseReducer,
  certificationReducer,
  bootcampReducer,
  projectReducer
});
export default allReducers;
