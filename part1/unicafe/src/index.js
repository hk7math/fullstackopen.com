import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => (
  <table>
    <tbody>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={good + neutral + bad}/>
      <Statistic text="average" value={(good - bad)/(good + neutral + bad)} />
      <Statistic text="positive" value={good/(good + neutral + bad)*100 + "%"}  />
    </tbody>
  </table>
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
      {
        good + neutral + bad > 0 
        ? <Statistics good={good} neutral={neutral} bad={bad}/>
        : <div>No feedback given</div>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
