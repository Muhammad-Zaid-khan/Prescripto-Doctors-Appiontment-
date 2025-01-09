import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import MyAppiontment from './pages/MyAppiontment'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appiontment from './pages/Appiontment'

const App = () => {
  return (
     <>
     <Navbar/>
     <div className='mx-4 sm:max-[10%]'>
      <Routes>
        <Route  path='/' element={ <Home/> } />
        <Route  path='/doctors' element= { <Doctor/> } />
        <Route  path='/doctors/:speciality' element= { <Doctor/> } />
        <Route  path='/about' element={ <About/> } />
        <Route  path='/contact' element={ <Contact /> } />
        <Route  path='/login' element={ <Login/> } />
        <Route  path='/my-appiontments' element={ <MyAppiontment/> } />
        <Route  path='/appiontment/:docId' element={ <Appiontment/> } />
        <Route  path='/my-profile' element={ <MyProfile /> } />
      </Routes>
      <Footer/>
     </div>
     </>
  )
}

export default App