import React from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();


  return (
    <div>
      <div className="col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ color: 'green' }}> <AiFillCheckCircle className="wd-icon" /> Published </button>
      <button className="wd-button"><SlOptionsVertical /></button> 
      </div>
    
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
      <button onClick={"handleSave"} className="btn btn-danger me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;