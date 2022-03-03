import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { project } from "../Redux/actions/actionsProjects";

const ApiProjects = () => {
    const dispatch = useDispatch();
    const setproject = (typeArgs, projectArgs,linkfrontendArgs,linkbackendArgs) => {dispatch(project(typeArgs, projectArgs,linkfrontendArgs,linkbackendArgs));
    };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/projects.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);

        const setDispatch = () => {
          for (let itens in mydata) {
            let type = mydata[itens][0].type;
            let project = mydata[itens][1].project;
            let linkfrontend = mydata[itens][2].linkfrontend;
            let linkbackend = mydata[itens][3].linkbackend;
            setproject(type,project, linkfrontend,linkbackend);
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

export default ApiProjects;
