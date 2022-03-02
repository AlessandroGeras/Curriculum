import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { certification } from "../Redux/actions/actionsCertifications";

const ApiCertifications = () => {
    const dispatch = useDispatch();
    const setcertification = (certificationsArgs, typeArgs,certificationArgs,linkArgs) => {dispatch(certification(certificationsArgs, typeArgs,certificationArgs,linkArgs));
    };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/certifications.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);
        
        for(let x=0;x<mydata.length;x++){
            let certifications = (mydata[x].certifications);
            x++;
            let type = (mydata[x].type);
            x++;
            let certification = (mydata[x].certification);
            x++;
            let link = (mydata[x].link);
            setcertification(certifications, type,certification,link);
        }
        
       
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiCertifications;
