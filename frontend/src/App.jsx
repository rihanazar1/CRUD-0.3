import {Routes, Route} from 'react-router-dom'
import ShowUsers from './components/ShowUsers'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'


const App = () => {
  return (
   <Routes>
      <Route path='/' element={<ShowUsers/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path='/update' element={<UpdateUser/>} />
   </Routes>
  )
}

export default App 