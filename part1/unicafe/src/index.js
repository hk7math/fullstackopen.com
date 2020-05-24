import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text}) => <button>{text}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good'/>
      <Button text='neutral'/>
      <Button text='bad'/>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {(good - bad)/(good + neutral + bad)} </div>
      <div>positive {good/(good + neutral + bad)*100} % </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)