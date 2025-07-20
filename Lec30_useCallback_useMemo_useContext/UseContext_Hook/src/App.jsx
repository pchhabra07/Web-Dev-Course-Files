import { useState } from 'react'
import DsaCourse from '../components/DsaCourse.jsx'
import WebDevCourse from '../components/WebDevCourse.jsx'

import DsaCourseContext from '../contexts/DsaCourseContext.jsx'
import WebDevCourseContext from '../contexts/WebDevCourseContext.jsx'
import './App.css'

function App() {
  const [DsaCourseData, setDsaCourseData]=useState({
    name: 'DSA',
    price: 1000,
    duration: '3 months'
  })
  const [WebDevCourseData, setWebDevCourseData]=useState({
    name: 'Web Dev',
    price: 2000,
    duration: '4 months'
  })

  return (
    <div>
      <DsaCourseContext.Provider value={{DsaCourseData, setDsaCourseData}}>
        <WebDevCourseContext.Provider value={{WebDevCourseData, setWebDevCourseData}}>
          <DsaCourse/>
          <WebDevCourse/>
        </WebDevCourseContext.Provider>
      </DsaCourseContext.Provider>
    </div>
  )
}
export default App
