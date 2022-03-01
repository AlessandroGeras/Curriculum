import speech from "./reducerSpeech";
import about from "./reducerAbout";
import tagreducer from "./reducerTags";
import jobreducer from "./reducerJobs";
import button from "./reducerButtons";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  speech,
  about,
  tagreducer,
  jobreducer,
  button
});
export default allReducers;
