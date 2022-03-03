import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { certification } from "../Redux/actions/actionsCertifications";

const ApiCertifications = () => {
    const dispatch = useDispatch();
    const setcertification = (typeArgs, categoryArgs,certificationArgs,linkArgs) => {dispatch(certification(typeArgs, categoryArgs,certificationArgs,linkArgs));
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
        
        const setDispatch = () => {
          for (let itens in mydata) {
            let type = mydata[itens][0].type;
            let category = mydata[itens][1].category;
            let certification = mydata[itens][2].certification;
            let link = mydata[itens][3].link;
            setcertification(type,category, certification,link);
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

export default ApiCertifications;
