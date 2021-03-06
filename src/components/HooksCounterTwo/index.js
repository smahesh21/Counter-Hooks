import {useState} from 'react'

function HooksCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const incrementFive = () => {
    setCount(prevState => prevState + 5)
  }
  return (
    <div>
      <h2>Hooks with previous value</h2>
      <p>Counter: {count}</p>
      <button
        type="button"
        onClick={() => setCount(prevState => prevState + 1)}
      >
        Increment
      </button>
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => setCount(prevState => prevState - 1)}
      >
        Decrement
      </button>
      <button type="button" onClick={incrementFive}>
        Increment 5
      </button>
    </div>
  )
}

export default HooksCounterTwo
