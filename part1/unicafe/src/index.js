import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => (
  <>
    <div>all {good + neutral + bad}</div>
    <div>average {(good - bad)/(good + neutral + bad)} </div>
    <div>positive {good/(good + neutral + bad)*100} % </div>
  </>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='good'/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
