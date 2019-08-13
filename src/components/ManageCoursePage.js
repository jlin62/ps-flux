import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as authorApi from "../api/authorApi";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";
import courseStore from "../stores/courseStore";

const ManageCoursePage = props => {
  // debugger;
  //first item is what we want to store in the state, the second item is the setter
  //this is called array destructuring
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    authorApi.getAuthors().then(_authors => setAuthors(_authors));
  }, []);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path `/courses/:slug`
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

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

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    // prevent the page from posting back to the server
    event.preventDefault();
    if (!formIsValid()) return;

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });
  }
  return (
    <>
      <h2>ManageCourse</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        authors={authors}
      />
    </>
  );
};

export default ManageCoursePage;
