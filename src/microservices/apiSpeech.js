import React, { useEffect} from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { speechone,speechtwo,speechthree } from "../Redux/actions/actionsSpeech";

const ApiSpeech = () => {
  const dispatch = useDispatch();
  const setspeechone = (args) => {dispatch(speechone(args))};
  const setspeechtwo = (args) => {dispatch(speechtwo(args))};
  const setspeechthree = (args) => {dispatch(speechthree(args))};

  useEffect(() => {
    api
      .get("/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/speech.json")
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);
        setspeechone(mydata[0].speech);
        setspeechtwo(mydata[1].speech);
        setspeechthree(mydata[2].speech);

      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiSpeech;
