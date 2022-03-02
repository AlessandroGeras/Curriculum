import speech from "./reducerSpeech";
import about from "./reducerAbout";
import tagreducer from "./reducerTags";
import jobreducer from "./reducerJobs";
import button from "./reducerButtons";
import coursereducer from "./reducerCourses";
import certificationreducer from "./reducerCertifications";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  speech,
  about,
  tagreducer,
  jobreducer,
  button,
  coursereducer,
  certificationreducer,
});
export default allReducers;
