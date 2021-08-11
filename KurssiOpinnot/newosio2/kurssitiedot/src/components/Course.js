import React from 'react'

const Course = ({ course }) => (
  course.map(p =>   <div key = {p.id}>
    <h1>{p.name}</h1>
    <ul>
    {p.parts.map(n => <li key={n.id}>{n.name} {n.exercises}</li>)}
    <p>total: {p.parts.reduce( (s, p) => s + p.exercises, 0)}</p>
    </ul>
  </div>
  )
)

export default Course