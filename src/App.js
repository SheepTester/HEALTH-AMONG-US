import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

async function getPriority (items) {
  const itemsProcessed = []
  const predictions = await fetch('https://base-api.mage.ai/v1/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: 'w6rkO120hYFp4h8XPrjRzvXxBMgVuCdM3f7ubgAO',
      features: items.map(item => ({ message: item })),
      include_features: false,
      model: 'custom_prediction_regression_1649562098026',
      version: '1'
    })
  }).then(r => r.json())
  for (const [i, { prediction }] of predictions.entries()) {
    let adjustment = 0
    if (items[i].toLowerCase().includes('netflix')) {
      adjustment -= 20
    }
    if (items[i].toLowerCase().includes('exer')) {
      adjustment += 20
    }
    itemsProcessed.push({
      healthiness:
        prediction +
        (await fetch(`http://127.0.0.1:5000/${items[i]}/`)
          .then(r => r.text())
          .then(r => +r.split(' has a value of ')[1])) +
        adjustment,
      item: items[i]
    })
  }
  return itemsProcessed
    .sort((a, b) => b.healthiness - a.healthiness)
    .map(({ item }) => item)
}

function App () {
  const [list, setList] = useState([
    'exercise',
    'take out the dog',
    'take medicinal supplement'
  ])
  const [toAdd, setToAdd] = useState('')

  useEffect(() => {
    getPriority(list).then(setList)
  }, [[...list].sort().join('\n')])

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
