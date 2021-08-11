import React from 'react'
import Course from './components/Course'
const App = () => {
  const course = [
    {
    name: 'Half Stack applicati]on development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
  }
  ,{
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  }
   ,{
    name: 'State of a component',
    exercises: 14,
    id: 3
  }
    
  ]

},
{
name: "Node.js",
id: 2,
parts: [
  {
    name: 'not funds of React',
    exercises: 12,
    id: 1
}
,{
  name: 'not using any props to pass data',
  exercises: 7,
  id: 2
}
 ,{
  name: 'unistes state of a component',
  exercises: 14,
  id: 3
}
  
]
}
]



  return( 
    <div>
      <Course course = {course} />
    </div>
  )
  }
export default App;
