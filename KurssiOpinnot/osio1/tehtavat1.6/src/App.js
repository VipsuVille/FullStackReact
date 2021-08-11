
import React, { useState } from 'react'

  const Button = ({ handleClick, text }) => (
      <button onClick = {handleClick}>
        {text}
      </button>
  )
  
  const StatisticLine = ({text, value}) => {
    return (
      <tr>
      <td>{text} {value}</td>
     </tr>
    )
  }

  const Statistics = (props) => {
    if (props.clicks.length === 0) {
      return (
      <p>Give FeedBack!!!!!</p>
      )
    }
    return (
      
      <div>
      <h1> Statistics </h1>
      <table>
        <tbody>
      <StatisticLine text = "Good :" value = {props.good} />
      <StatisticLine text = "Neutral :" value = {props.neutral} />
      <StatisticLine text = "Bad :"  value = {props.bad} />
      <StatisticLine text = "All :"  value = {props.bad + props.neutral + props.good} />
      <StatisticLine text = "Average :" value = {(props.good - props.bad) / (props.bad + props.neutral + props.good)} />
      <StatisticLine text = "Positive :" value = {props.good / (props.bad + props.neutral + props.good) * 100 } />
      </tbody>
      </table>
    </div>
    )
  }
const App = () => {
  const handleClickgood = () => {
    setGood(good +1) 
    setClicks(Clicks +1)
  }
  const handleClickneutral = () => {
    setNeutral(neutral +1) 
    setClicks(Clicks +1)
  }
  const handleClickbad = () => {
    setBad(bad +1) 
    setClicks(Clicks +1)
  }
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [Clicks, setClicks] = useState([])

  return( 
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClickgood} text = "good"/>
      <Button handleClick={handleClickneutral} text = "Neutral"/> 
      <Button handleClick={handleClickbad} text = "Bad" />
      <br />
      <Statistics good = {good} neutral = {neutral} bad = {bad} clicks = {Clicks} />
    </div>
  )
  }
export default App;
