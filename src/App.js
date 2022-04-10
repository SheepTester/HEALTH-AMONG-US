import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [list, setList] = useState([
    'exercise',
    'take out the dog',
    'take medicinal supplement'
  ])
  const [toAdd, setToAdd] = useState('')

  useEffect(() => {
    fetch('https://base-api.mage.ai/v1/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: 'w6rkO120hYFp4h8XPrjRzvXxBMgVuCdM3f7ubgAO',
        features: list.map(item => ({ message: item })),
        include_features: false,
        model: 'custom_prediction_regression_1649562098026',
        version: '1'
      })
    })
      .then(r => r.json())
      .then(predictions => {
        setList(
          predictions
            .map(({ prediction }, i) => ({
              healthiness: prediction,
              item: list[i]
            }))
            .sort((a, b) => b.healthiness - a.healthiness)
            .map(({ item }) => item)
        )
      })
  }, [list.sort().join('\n')])

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
            setList([...list, toAdd.trim().replace(/[\r\n]/g, '')])
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
