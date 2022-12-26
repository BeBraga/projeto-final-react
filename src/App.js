import './global.css'
import Products from './pages/products_page/index.js'
import Homepage from './pages/Homepage/index.js'
import MyRoutes from './routes/index.js'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <MyRoutes/>
      <Products/>
      <Homepage/>
    </BrowserRouter>
  )
}

export default App; 