import React from 'react';
import './App.css';
import Course from'./Course.js';
const App = () => {
  const courses = [
    {
    head: 'Half Stack application development',
    id: 1,
    Content: [
      {

          name: 'Fundamentals of React',
          exercises: 10,
          id: 1

        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        }, 
        {
        name: 'State of a components',
        exercises: 14,
        id: 3
        },
        {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    
    ]
  },
  {
    head: 'Node.js',
    id: 2,
    Content: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
/*  const total = course.reduce(function (sum ,pum) {
  console.log('hello',sum, pum)
    return s +  p.exercises},0)
    console.log('tää on total' ,total) */
    let kourses = courses.map(course => <Course course = {course} />)
    console.log(kourses)
  return (
    <div>
      
    <h1>Web kurssit</h1> 
    {kourses}
    </div>
  )
}
  
export default App;
