import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { SlOptionsVertical } from "react-icons/sl";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <button className="wd-button">Collapse All</button>
      <button className="wd-button">view Progress</button>
      <button className="wd-button">Publish All</button>
      <button className="wd-button" style={{ backgroundColor: 'red', color: 'white' }}>+ Modules</button>
      <button className="wd-button"><SlOptionsVertical /></button>
      <hr />
    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;