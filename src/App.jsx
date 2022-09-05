
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './components/Landing'
import Form from './components/Form'
import Users from './components/Users'
import Personajes from './components/Personajes'
import Error from './components/Error'


// RUTEO

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/personajes' element={<Personajes />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
