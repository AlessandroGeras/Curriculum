import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { tag } from "../Redux/actions/actionsTags";

const ApiTags = () => {
  const dispatch = useDispatch();
  const settag = (tagArgs, idArgs) => {
    dispatch(tag(tagArgs, idArgs));
  };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/tags.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);

        const setDispatch = () => {
          for (let itens in mydata) {
            let tag = mydata[itens].skill;
            let random = Math.floor(Math.random() * 14);
            let randomstring = "random" + random;
            settag(tag, randomstring);
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

export default ApiTags;
