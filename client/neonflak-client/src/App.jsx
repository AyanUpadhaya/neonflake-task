import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
function App() {
 
  return (
    <>
      <div className="app">
        <Nav/>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
