import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./components/Home.jsx";
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction.jsx';
import Cart from './components/Cart.jsx';
import { Provider } from "react-redux";
import {Store} from "./store/Store.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Men' element={<UnderConstruction />} />
          <Route path='/Women' element={<UnderConstruction />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
