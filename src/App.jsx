import Home from "./components/Home"
import Contact from "./components/ContactUs"
import About from './components/About'
import {BrowserRouter as Router,
        Link,
        Outlet,
        Route,
        Routes } from 'react-router-dom'

function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
