import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { bootcamp } from "../Redux/actions/actionsBootcamps";

const ApiBootcamps = () => {
    const dispatch = useDispatch();
    const setbootcamp = (bootcampsArgs,bootcampArgs, workloadArgs,issuedateArgs,linkArgs) => {dispatch(bootcamp(bootcampsArgs,bootcampArgs, workloadArgs,issuedateArgs,linkArgs));
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
        
        for(let x=0;x<mydata.length;x++){
          let bootcamps = (mydata[x].bootcamps);
          x++;
            let bootcamp = (mydata[x].bootcamp);
            x++;
            let workload = (mydata[x].workload);
            x++;
            let issuedate = (mydata[x].issuedate);
            x++;
            let link = (mydata[x].link);          

            setbootcamp(bootcamps,bootcamp , workload,issuedate,link);
        }
        
       
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiBootcamps;
