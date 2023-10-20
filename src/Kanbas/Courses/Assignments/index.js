import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { SlOptionsVertical } from "react-icons/sl";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="row">
        <div className="col" style={{ textAlign: 'left' }}><input title="Type the name of the assignments to search for" placeholder="Search for Assignments" /></div>
        <div className="col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="wd-button">+Group</button>
          <button className="wd-button" style={{ backgroundColor: 'red', color: 'white' }}>+ Assignment</button>
          <button className="wd-button"><SlOptionsVertical /></button>
        </div>
      </div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;