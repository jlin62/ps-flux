import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  //   debugger;
  //first item is what we want to store in the state, the second item is the setter
  //this is called array destructuring
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    //{target} ==== const {target} = event; destructuring
    //   const target = event;

    //spread operator to create a copy of course object
    //1. copy the couser object
    //2. set title property on the copy of the value passed in on the event
    //Computed propery: eg [event.target.name]:
    //Read as: set a property on this object based on the value of this variable
    const updatedCourse = {
      ...course,
      [target.name]: target.value
    };
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2>ManageCourse</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {props.match.params.slug}
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
