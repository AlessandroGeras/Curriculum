import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { speech } from "../Redux/actions/actionsSpeech";

const ApiSpeech = () => {
  const dispatch = useDispatch();
  const setspeech = (args) => {
    dispatch(speech(args));
  };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/speech.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);

        const setDispatch = () => {
          for (let itens in mydata) {
            let speech = mydata[itens][0].speech;
            setspeech(speech);
          }
        };

        setDispatch();
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiSpeech;
