import HooksCounter from './components/HooksCounter'
import HooksCounterTwo from './components/HooksCounterTwo'

import './App.css'
import ObjectsWithHooks from './components/ObjectsWithHooks'
import HooksWithArray from './components/HooksWithArray'

function App() {
  return (
    <div className="app-container">
      <HooksCounter />
      <HooksCounterTwo />
      <ObjectsWithHooks />
      <HooksWithArray />
    </div>
  )
}

export default App
