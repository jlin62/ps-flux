import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

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
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
