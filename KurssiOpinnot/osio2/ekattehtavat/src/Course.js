
import React from 'react'


const Course = ({course}) => {
    console.log(course.Content)
    console.log(course)
    return (
    <div>
    <Header course = {course.name} />
    <Content course = {course.Content} />
    <Total course = {course.Content} />
    </div>
    )}

    const Content = ({ course }) => {
        console.log(course.Content)
        console.log(course)
  return (
    <div>
      {course.map(
        part => <p> {part.name} {part.exercises} </p>
      )}
     
    </div>
  )
}
const Total = ({ course }) => {
    const sum = course.reduce((eka, toka) => eka + toka.exercises, 0);
    return (
      <p>
        <b>All together {sum}</b>
      </p>
    )
  };


const Header = ({ course }) => {
    return (
      <h2>
         {course}
      </h2>
    )
  }

    export default Course