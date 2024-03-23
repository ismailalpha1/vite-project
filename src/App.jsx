import TestFunction from './components/header'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/FunctionalComponent'
import ConditionalRendering from './components/ConditionalRendering'
import './App.css'
import Authentification from './components/ConditionalRendering'
import List from './components/List'
import CounterApp from './components/CounterApp'

function App() {

  return (
    <div>
      {/* <h1>This is the App page</h1>
      <TestFunction nickname='jalali'/>
      <ClassBasedComponent test='TEST'/>
      <FunctionalComponent/> */}
      {/* <Authentification/> */}
      {/* <List/> */}
      <CounterApp/>
    </div>
  )
}

export default App
