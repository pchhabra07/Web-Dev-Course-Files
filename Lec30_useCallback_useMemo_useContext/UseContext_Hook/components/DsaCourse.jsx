import { useContext } from "react";
import DsaCourseContext from "../contexts/DsaCourseContext";

function DsaCourse(){
    const dsaValue=useContext(DsaCourseContext)

    return (
        <div>
            <h3>Name: {dsaValue.DsaCourseData.name}</h3>
            <p>Price: {dsaValue.DsaCourseData.price}</p>
            <p>Duration: {dsaValue.DsaCourseData.duration}</p>
        </div>
    )
}

export default DsaCourse;