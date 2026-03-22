
import './App.css'
import AddUser from './components/AddUser'
import RemoveUser from './components/RemoveUser'
import UpdateUser from './components/UpdateUser'
import Users from './components/Users'

function App() {

  return (
    <div>
      <h1>React Axios Tutorial</h1>
      <Users />
      <AddUser />
      <UpdateUser />
      <RemoveUser />
    </div>
  )
}

export default App
