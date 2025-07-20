import { useContext } from "react";
import WebDevCourseContext from "../contexts/WebDevCourseContext";

function WebDevCourse(){
    const webDevValue=useContext(WebDevCourseContext)
    return (
        <div>
            <h3>Name: {webDevValue.WebDevCourseData.name}</h3>
            <p>Price: {webDevValue.WebDevCourseData.price}</p>
            <p>Duration: {webDevValue.WebDevCourseData.duration}</p>
        </div>
    )
}

export default WebDevCourse;