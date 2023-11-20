import ModuleList from "../Modules/ModuleList";
import React from "react";
import { FaFileImport, FaCloudUploadAlt, FaChromecast, FaChartBar, FaBullhorn, FaBell } from 'react-icons/fa';


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <ModuleList />
        </div>
        <div className="col-2 list-group wd-color-gray">
            <br/>
            <br/>
            <br/>
            <a href="/Kanbas/Courses/CourseStatus/ImportExistingContent.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
                <FaFileImport style={{ color: "#000000" }} />Import Existing Content
            </a>
            <a href="/Kanbas/Courses/CourseStatus/ImportFromCommons.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaCloudUploadAlt style={{ color: "#000000" }} />Import From Commons
            </a>
            <a href="/Kanbas/Courses/CourseStatus/ChooseHomePage.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaChromecast style={{ color: "#000000" }} />Choose Home Page
            </a>
            <a href="/Kanbas/Courses/CourseStatus/ViewCourseStream.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaChartBar style={{ color: "#000000" }} />View Course Stream
            </a>
            <a href="/Kanbas/Courses/CourseStatus/NewAnnouncement.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaBullhorn style={{ color: "#000000" }} />New Announcement
            </a>
            <a href="/Kanbas/Courses/CourseStatus/NewAnalytics.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaChartBar style={{ color: "#000000" }} />New Analytics
            </a>
            <a href="/Kanbas/Courses/CourseStatus/ViewCourseNotifications.html" className="list-group-item list-group-item-action" style={{backgroundColor: 'rgb(242, 238, 238)'}}>
            <FaBell style={{ color: "#000000" }} />View Course Notifications
            </a>
        </div>
        </div>
  );
}
export default Home;