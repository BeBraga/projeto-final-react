import './global.css'
import Navbar from './components/Navbar/index.js' 
import Footer from './components/Footer/index.js'
import MyRoutes from './routes/index.js'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <MyRoutes/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App; 