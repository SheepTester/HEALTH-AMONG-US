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
          <div className='list-item' key={i}>
            <button
              class='remove'
              onClick={() => {
                setList(list.filter((_, j) => i !== j))
              }}
            >
              Done
            </button>
            <div className='todo-item'>{content}</div>
          </div>
        ))}
      </div>
      <form
        className='add-item-wrapper'
        onSubmit={e => {
          setList([...list, toAdd])
          setToAdd('')
          e.preventDefault()
        }}
      >
        <input
          className='add-input'
          type='text'
          placeholder='Other Crewmate tasks...'
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
