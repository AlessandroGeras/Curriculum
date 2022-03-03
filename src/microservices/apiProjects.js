import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { project } from "../Redux/actions/actionsProjects";

const ApiProjects = () => {
    const dispatch = useDispatch();
    const setproject = (projectsArgs, projectArgs,linkArgs) => {dispatch(project(projectsArgs, projectArgs,linkArgs));
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
        
        for(let x=0;x<mydata.length;x++){
            let projects = (mydata[x].projects);
            x++;
            let project = (mydata[x].project);
            x++;
            let link = (mydata[x].link);
            setproject(projects, project,link);
        }
        
       
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiProjects;
