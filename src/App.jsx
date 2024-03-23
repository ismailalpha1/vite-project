import TestFunction from './components/header'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/FunctionalComponent'
import './App.css'

function App() {

  return (
    <div>
      <h1>This is the App page</h1>
      <TestFunction nickname='jalali'/>
      <ClassBasedComponent test='TEST'/>
      <FunctionalComponent/>
    </div>
  )
}

export default App
