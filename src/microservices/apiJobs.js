import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { job } from "../Redux/actions/actionsJobs";

const ApiJobs = () => {
    const dispatch = useDispatch();
    const setjob = (args, role,skills,start,end) => {dispatch(job(args, role,skills,start,end));
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
        
        for(let x=0;x<mydata.length;x++){
            let job = (mydata[x].job);
            x++;
            let role = (mydata[x].role);
            x++;
            let skills = (mydata[x].skills);
            x++;
            let start = (mydata[x].start);
            x++;
            let end = (mydata[x].end);
            setjob(job,role,skills,start,end);
        }
        
       
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiJobs;
