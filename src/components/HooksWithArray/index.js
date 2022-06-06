import {useState} from 'react'

function HooksWithArray() {
  const [items, setItems] = useState([])
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 20) + 1,
      },
    ])
  }
  return (
    <div>
      <h2>Hooks with Array Example</h2>
      <button type="button" onClick={addItems}>
        Add a number
      </button>
      <ul>
        {items.map(item => (
          <li key={item.length}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HooksWithArray
