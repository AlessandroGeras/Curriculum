import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { course } from "../Redux/actions/actionsCourses";

const ApiCourses = () => {
    const dispatch = useDispatch();
    const setcourse = (coursesArgs, courseArgs,placeArgs) => {dispatch(course(coursesArgs, courseArgs,placeArgs));
    };

  useEffect(() => {
    api
      .get(
        "/repos/AlessandroGeras/AlessandroGeras/contents/Curriculum/courses.json"
      )
      .then((response) => {
        let str = response.data.content;
        let buff = new Buffer(str, "base64");
        let base64ToStringNew = buff.toString("utf-8");
        var mydata = JSON.parse(base64ToStringNew);
        
        for(let x=0;x<mydata.length;x++){
            let courses = (mydata[x].courses);
            x++;
            let course = (mydata[x].course);
            x++;
            let place = (mydata[x].place);
            setcourse(courses, course,place);
        }
        
       
      })
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return <div></div>;
};

export default ApiCourses;
