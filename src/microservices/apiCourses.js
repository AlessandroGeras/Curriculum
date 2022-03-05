import React, { useEffect } from "react";
import api from "./api";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";
import { course } from "../Redux/actions/actionsCourses";

const ApiCourses = () => {
  const dispatch = useDispatch();
  const setcourse = (typeArgs, courseArgs, placeArgs, issuedateArgs) => {
    dispatch(course(typeArgs, courseArgs, placeArgs, issuedateArgs));
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

        const setDispatch = () => {
          for (let itens in mydata) {
            let type = mydata[itens][0].type;
            let course = mydata[itens][1].course;
            let place = mydata[itens][2].place;
            let issuedate = mydata[itens][3].issuedate;
            setcourse(type, course, place, issuedate);
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

export default ApiCourses;
