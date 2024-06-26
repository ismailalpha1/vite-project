import TestFunction from './components/header'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/FunctionalComponent'
import ConditionalRendering from './components/ConditionalRendering'
import './App.css'
import Authentification from './components/ConditionalRendering'
import List from './components/List'
import CounterApp from './components/CounterApp'
import Form from './components/Form'
import RegistrationForm from './components/RegistrationForm'
import ClickCounter from './components/ClickCounter'
import CourseContext from './components/context/courseContext'
import Timer from './components/useEffect/Timer'
import Posts from './components/APi/Posts'
import UseRef from './components/useRef'
import UseReducer from './components/useReducer'
import ComplexCounter from './components/complexCounter'
import PostWithoutReducer from './components/PostWithoutReducer'
function App() {

  return (
    <div>
      {/* <h1>This is the App page</h1>
      <TestFunction nickname='jalali'/>
      <ClassBasedComponent test='TEST'/>
      <FunctionalComponent/> */}
      {/* <Authentification/> */}
      {/* <List/> */}
      {/* <CounterApp/> */}
      {/* <Form/> */}
      {/* <RegistrationForm/> */}
      {/* <ClickCounter /> */}
      {/* <Timer/> */}
      {/* <Posts/> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
      {/* <ComplexCounter/> */}
      <PostWithoutReducer/>
    </div>
  )
}

export default App
