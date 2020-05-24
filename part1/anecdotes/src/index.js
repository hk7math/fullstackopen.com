import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({title, anecdote, vote}) => (
  <>
    <h1>{title}</h1>
    {anecdote}
    <br/>
    has {vote} votes
    <br/>
  </>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const addVote = (selected) => {
    const newVotes = [...votes]
    newVotes[selected]+=1
    setVotes(newVotes) 
  }

  const mostVote = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Anecdote 
        title="Anecdote of the day" 
        anecdote={anecdotes[selected]} 
        vote={votes[selected]}
      />
      <button onClick={() => addVote(selected)}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <Anecdote 
        title="Anecdote of most votes" 
        anecdote={anecdotes[mostVote]} 
        vote={votes[mostVote]}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)