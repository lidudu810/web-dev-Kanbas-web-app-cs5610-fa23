import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addAssignment,
//   deleteAssignment,
//   updateAssignment,
//   selectAssignment,
// } from "./assignmentReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  // const navigate = useNavigate();
  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // const assignment = useSelector((state) => state.assignmentReducer.assignment);
  // const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const dateObjectToHtmlDateString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };


  return (
    <div>
      <div className="col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <a style={{ color: 'green' }}><AiFillCheckCircle className="wd-icon" />Published</a >

      <button className="wd-button"><SlOptionsVertical /></button></div>
      
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
      <textarea
          value={"assignment.description"}/>
      <h5>Points</h5>
      <input
          placeholder="100"/>
      <h5>Assign</h5>
      <ul>
      <h5>Due</h5>
      <input
          type="date"
          value={"dateObjectToHtmlDateString(assignment.dueDate)"
          }/>
      <h5>Available from</h5>
      <input
          type="date"
          value={"dateObjectToHtmlDateString(assignment.dueDate)"
          }/>
      <h5>Until</h5>
      <input
          type="date"
          value={"dateObjectToHtmlDateString(assignment.dueDate)"
          }/>
      </ul>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light">
        Cancel
      </Link>
      {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
      <button onClick={"handleSave"} className="btn btn-danger me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;