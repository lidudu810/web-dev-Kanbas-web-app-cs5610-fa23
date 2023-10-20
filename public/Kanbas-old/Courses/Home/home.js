import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation

from "../CourseNavigation/CourseNavigation.js";
function Home() {
return(`
        <div class="d-block d-md-none wd-flex-row-container wd-small-views-navigation">
            <div style="align-items: start;">
                <a href="/Kanbas/smviewsNavigation/leftbarnavi.html">
                        <i class="fa-solid fa-bars fa-3x" style="color: #ffffff;"></i>
                </a>
            </div>
            <div style="font-size: 1.3em; color: #ffffff;">
                    CS5610.17387.202410 A1-ENV + HTML</a>
            </div>
            <div>
                <a href="/Kanbas/smviewsNavigation/coursenavibar.html">
                    <i class="fa-solid fa-chevron-down fa-2x" style="color: #ff0000;"></i>
                </a>
            </div>
        </div>
        <div class="wd-flex-row-container">
            <div class="wd-bg-color-black">
                ${KanbasNavigation()}
            </div>
            <div class="wd-flex-column-container">
                <div>
                    <div class="row">
                        <div class="col-9"><br />
                            <br />
                            <ul>
                                <nav class="d-none d-md-block" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                                    <ol class="breadcrumb d-flex justify-content-right">
                                        <i class="fa-solid fa-bars fa-2x" style="color: #ff2600;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <li class="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" style="text-decoration: none; color: #ff2600;">CS5610.17387.202410</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                                    </ol>
                                </nav>
                            </ul>
                        </div>
                        <div class="col-3 d-none d-md-block"><br /><br /><button><i class="fa-solid fa-glasses"></i> Student view</button></div>
                        <hr />
                    </div>   
                </div>  
                <div class="wd-flex-row-container">
                    <div>
                        ${CourseNavigation()}
                    </div>
                    <div class="col-7">
                        <div class="d-flex justify-content-end align-items-center">
                            <button class="wd-button-size">Collapse All</button>
                            <button class="wd-button-size">view Progress</button>
                            <div class="dropdown">
                                <button class="wd-button-size dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Publish All</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Publish all item and modules</a>
                                    <a class="dropdown-item" href="#">UnPublish</a>
                                </div>
                            </div>
                                <button class="wd-button-size" style="color: white; background-color: #ff2600;">+ Modules</button>
                                <button class="wd-button-size-2"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                        </div>
                        <hr />
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"><i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;Week 0 - INTRO</div>
                                    <div class="col-1"><i class="fa-solid fa-plus"></i>&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;LEARNING OBJECTIVES</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to the course</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn what is Web Development</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating a development environment</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating a Web Application</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Getting started with the 1st assignment</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;READING</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Stack Developer - Chapter 1 - Introduction</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                        
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical"></i>&nbsp;&nbsp;&nbsp;&nbsp;SLIDES</div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" style="color: red; text-decoration: none;">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical" style="color: black;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fa-solid fa-link" style="color: #000000;"></i>&nbsp;Introduction to Web Development Links to an external site.&nbsp;
                                        <i class="fa-regular fa-window-maximize" style="color: #ff2600;"></i></div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" style="color: red; text-decoration: none;">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical" style="color: black;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fa-solid fa-link" style="color: #000000;"></i>&nbsp;Creating an HTTP server with Node.js Links to an external site.&nbsp;
                                        <i class="fa-regular fa-window-maximize" style="color: #ff2600;"></i></div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" style="color: red; text-decoration: none;">
                                <div class="row">
                                    <div class="col-11"> <i class="fa-solid fa-grip-vertical" style="color: black;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fa-solid fa-link" style="color: #000000;"></i>&nbsp;Creating a React Application Links to an external site.&nbsp;
                                        <i class="fa-regular fa-window-maximize" style="color: #ff2600;"></i></div>
                                    <div class="col-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div style="margin-left: 20px;" class="d-none d-lg-block">
                        <b style="font-size: large;">Course Status</b><br />
                        <button class="wd-button-gray"><i class="fa-solid fa-ban"></i>UnPubilsh</button> 
                        <button class="wd-button-green"><i class="fa-regular fa-circle-check"></i>Pubilsh</button>
                        <br /><br /><br />
                        
                        <div class="list-group wd-color-gray">
                            <a href="/Kanbas/Courses/CourseStatus/ImportExistingContent.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-solid fa-file-import" style="color: #a8a8a8;"></i>Import Existing Content</a>
                            <a href="/Kanbas/Courses/CourseStatus/ImportFromCommons.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-solid fa-cloud-arrow-up" style="color: #a8a8a8;"></i>Import From Commons</a>
                            <a href="/Kanbas/Courses/CourseStatus/ChooseHomePage.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-brands fa-chromecast" style="color: #a8a8a8;"></i>Choose Home Page</a>
                            <a href="/Kanbas/Courses/CourseStatus/ViewCourseStream.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-solid fa-chart-column" style="color: #a8a8a8;"></i>View Course Stream</a>
                            <a href="/Kanbas/Courses/CourseStatus/NewAnnouncement.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-solid fa-bullhorn" style="color: #a8a8a8"></i>New Announcement</a>
                            <a href="/Kanbas/Courses/CourseStatus/NewAnalytics.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-solid fa-chart-column" style="color: #a8a8a8;"></i>New Analytics</a>
                            <a href="/Kanbas/Courses/CourseStatus/ViewCourseNotifications.html" class="list-group-item list-group-item-action" style="background-color: rgb(242, 238, 238);"><i class="fa-regular fa-bell" style="color: #a8a8a8;"></i>View Course Notifications</a>
                        </div><br />

                        <b style="font-size: large;">To Do</b><hr />
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <a href="/Kanbas/Courses/Assignments/screen.html" class="wd-card-form">
                                    <div class="col">
                                        <div class="card-body">
                                            <p style="font-size: large; color: red;" class="card-title"><i class="fa-solid fa-circle-info fa-1x" style="color: red;"></i>Grade A1 - ENV + HTML</p>
                                            <p class="card-text">100 points・Sep 18 at 11:59pm</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-1"><i class="fa-solid fa-xmark"></i></div>
                        </div>

                        <div class="row">
                            <div class="col-7"><b style="font-size: large;">Coming Up</b></div>
                            <div class="col-5">
                                <i class="fa-solid fa-calendar-days" style="color: #ababab;"></i>
                                <a href="/Kanbas/Courses/Calendar/index.html" style="color: red; text-decoration: none">View Calendar</a>
                            </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-1"><br /><i class="fa-solid fa-calendar-days fa-2x" style="color: #ababab;"></i></div>
                            <div class="col-11">
                                <a href="/Kanbas/Courses/CourseStatus/LectureCS4550.12631.202410Sep7at11:45am.html" class="wd-card-form">
                                    <div class="col">
                                        <div class="card-body">
                                            <p style="font-size: large; color: red;" class="card-title">Lecture</p>
                                            <p class="card-text">CS4550.12631.202410 Sep 11 at 11:45am</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>

                            <div class="row">
                                <div class="col-1"><br /><i class="fa-solid fa-calendar-days fa-2x" style="color: #ababab;"></i></div>
                                <div class="col-11">
                                    <a href="/Kanbas/Courses/CourseStatus/LectureCS4550.12631.202410Sep11at11:45am.html" class="wd-card-form">
                                        <div class="col">
                                            <div class="card-body">
                                                <p style="font-size: large; color: red;" class="card-title">CS5610 06 SP23 Lecture</p>
                                                <p class="card-text">Lecture CS4550.12631.202410 Sep 11 at 11:45am</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-1"><br /><i class="fa-solid fa-calendar-days fa-2x" style="color: #ababab;"></i></div>
                                <div class="col-11">
                                    <a href="/Kanbas/Courses/CourseStatus/CS561006SP23LectureSep11at6pm.html" class="wd-card-form">
                                        <div class="col">
                                            <div class="card-body">
                                                <p style="font-size: large; color: red;" class="card-title">CS5610 Web Development<br /> Summer 1 2023 - Lecture</p>
                                                <p class="card-text">CS5610 06 SP23 Lecture Sep 11 at 6pm</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <a style="text-decoration: none; color: #ff2600;">12 more in the next week...</a>
                        </div>
                    </div>
            </div>
        </div>
`)
}
export default Home;