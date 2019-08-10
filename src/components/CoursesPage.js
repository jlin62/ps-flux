import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);
  //Doing the same thing
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       courses: []
  //     };

  //   state = {
  //     courses: []
  //   };

  //   componentDidMount() {
  //     //Doing the same thing
  //     getCourses().then(courses => this.setState({ courses: courses }));
  //     // getCourses().then(function(courses) {
  //     //   this.setState({ courses: courses });
  //     // });
  //   }
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
