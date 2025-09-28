
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Pnf from './pages/Pnf'

function App() {


  return (
    <>
    <Header/>
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} /> 
         <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/*' element={<Pnf/>}/>
               
    </Routes>

    <Footer/>
     
    </>
  )
}

export default App
