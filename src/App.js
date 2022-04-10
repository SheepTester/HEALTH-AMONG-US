import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App () {
  const [list, setList] = useState([
    'exercise',
    'take out the dog',
    'take medicinal supplement'
  ])
  const [toAdd, setToAdd] = useState('')

  return (
    <div className='list-wrapper'>
      <div className='list'>
        {list.map((content, i) => (
          <button
            className='list-item'
            key={i}
            onClick={() => {
              setList(list.filter((_, j) => i !== j))
            }}
          >
            <div className='bubble'></div>
            <div className='todo-item'>{content}</div>
          </button>
        ))}
      </div>
      <form
        className='add-item-wrapper'
        onSubmit={e => {
          if (toAdd.trim()) {
            setList([...list, toAdd.trim()])
            setToAdd('')
          }
          e.preventDefault()
        }}
      >
        <input
          className='add-input'
          type='text'
          placeholder='Add Crewmate task'
          value={toAdd}
          onChange={e => {
            setToAdd(e.currentTarget.value)
          }}
          autoFocus
        />
        <button className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default App
