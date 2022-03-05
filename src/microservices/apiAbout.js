import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import {
  aboutone,
  abouttwo,
  aboutthree,
  aboutfour,
} from "../Redux/actions/actionsAbout";

const ApiAbout = () => {
  const dispatch = useDispatch();
  const setaboutone = (args) => {
    dispatch(aboutone(args));
  };
  const setabouttwo = (args) => {
    dispatch(abouttwo(args));
  };
  const setaboutthree = (args) => {
    dispatch(aboutthree(args));
  };
  const setaboutfour = (args) => {
    dispatch(aboutfour(args));
  };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/about.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);
        setaboutone(mydata[0].about);
        setabouttwo(mydata[1].about);
        setaboutthree(mydata[2].about);
        setaboutfour(mydata[3].about);
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiAbout;
