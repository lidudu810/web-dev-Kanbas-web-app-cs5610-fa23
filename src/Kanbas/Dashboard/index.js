import { Link } from "react-router-dom";
import { React } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) 
  {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="float-end">
            <button class="btn btn-success" onClick={addNewCourse} >
        Add
      </button>
      <button class="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      </div>
      <div className="float-start">
      <input value={course.name} className="form-control" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      </div>
      </li>
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            <div className="float-end">
            <button class="btn btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button class="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            </div>
            {course.name}
          </Link>
        ))}
      </div>
    </ul>
    </div>
  );
}

export default Dashboard;