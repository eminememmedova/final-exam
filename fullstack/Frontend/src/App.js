import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Header/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import Home from "./Pages/Home/index.jsx"
import Add from "./Pages/Add/index.jsx"
import About from "./Pages/About/index.jsx"
import Contacts from "./Pages/Contacts/index.jsx"
import Portfolio from "./Pages/Portfolio/index.jsx"
import Pricing from "./Pages/Pricing/index.jsx"

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<div className='routes'>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/add' element={<Add/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contacts' element={<Contacts/>}></Route>
<Route path='/portfolio' element={<Portfolio/>}></Route>
<Route path='/pricing' element={<Pricing/>}></Route>
</Routes>
</div>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
