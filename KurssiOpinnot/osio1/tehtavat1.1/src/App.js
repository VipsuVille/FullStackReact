import React from 'react'

  const Header = (props) => {
    console.log(props.course)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    console.log(props.parts)
    return (
      <div>
      <p>Nimi: {props.parts[0].name} Määrä: {props.parts[0].exercises}</p>
      <p>Nimi: {props.parts[1].name} Määrä: {props.parts[1].exercises}</p>
      <p>Nimi: {props.parts[2].name} Määrä: {props.parts[2].exercises}</p>
      </div>
      )
  }
  const Total = (props) => {
    console.log(props.parts[0].exercises)

   return (<div>  Yhteensä: {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</div>)
  }
const App = () => {
  const course = {
    name: 'Half Stack applicati]on development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
  }
  ,{
    name: 'Using props to pass data',
    exercises: 7
  }
   ,{
    name: 'State of a component',
    exercises: 14
  }
    
  ]
}

  return( 
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
  }
export default App;
