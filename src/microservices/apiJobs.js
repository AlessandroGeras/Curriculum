import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { job } from "../Redux/actions/actionsJobs";

const ApiJobs = () => {
    const dispatch = useDispatch();
    const setjob = (jobArgs, roleArgs,skillsArgs,startArgs,endArgs) => {dispatch(job(jobArgs, roleArgs,skillsArgs,startArgs,endArgs));
    };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/jobs.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);
        
        const setDispatch = () => {
          for (let itens in mydata) {
            let job = mydata[itens][0].job;
            let role = mydata[itens][1].role;
            let skills = mydata[itens][2].skills;
            let start = mydata[itens][3].start;
            let end = mydata[itens][4].end;            
            setjob(job,role,skills,start,end);
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

export default ApiJobs;
