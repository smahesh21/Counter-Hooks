import {useState} from 'react'

function ObjectsWithHooks() {
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <form>
      <h2>Hooks with Objects Example</h2>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({...name, firstName: e.target.value})}
        placeholder="Enter firstname"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({...name, lastName: e.target.value})}
        placeholder="Enter lastname"
      />
      <h3>Your firstname is : {name.firstName}</h3>
      <h3>Your lastname is : {name.lastName}</h3>
    </form>
  )
}

export default ObjectsWithHooks
