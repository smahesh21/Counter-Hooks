import {useState} from 'react'

function HooksCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Counter {count}
      </button>
    </div>
  )
}

export default HooksCounter
