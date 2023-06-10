import { Outlet } from "react-router-dom";
import Header from '../Components/header/Header.js'
import Footer from '../Components/Footer.js'



const Layout = () => {
  
    return (
      <>
        <Header />
       
        
        <Outlet />
       <Footer />
      </>
    )
  };
  
  export default Layout;