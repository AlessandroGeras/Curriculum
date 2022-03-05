import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { bootcamp } from "../Redux/actions/actionsBootcamps";

const ApiBootcamps = () => {
  const dispatch = useDispatch();
  const setbootcamp = (
    typeArgs,
    bootcampArgs,
    workloadArgs,
    issuedateArgs,
    linkArgs
  ) => {
    dispatch(
      bootcamp(typeArgs, bootcampArgs, workloadArgs, issuedateArgs, linkArgs)
    );
  };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/bootcamps.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);

        const setDispatch = () => {
          for (let itens in mydata) {
            let type = mydata[itens][0].type;
            let bootcamp = mydata[itens][1].bootcamp;
            let workload = mydata[itens][2].workload;
            let issuedate = mydata[itens][3].issuedate;
            let link = mydata[itens][4].link;
            setbootcamp(type, bootcamp, workload, issuedate, link);
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

export default ApiBootcamps;
