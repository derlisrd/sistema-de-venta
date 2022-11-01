
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "../Components/Menu/NavbarMenu";
import About from "./About";
import Home from "./Home";


const Pages = () => {


  return (
    <>
     <NavbarMenu />
      <Routes>
        <Route path="/about" element={<About />} />    
        <Route path="/" element={<Home />} />    
      </Routes>   
    </>
  )
}

export default Pages
