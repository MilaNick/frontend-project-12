import {Outlet} from "react-router-dom";

import Header from "ui/Header";
import Footer from "ui/Footer";

import './index.scss';

const Layout = () => {
  // const location = useLocation();
// const navigate = useNavigate();
// useEffect(()=> {
//   console.log(location.pathname)
//   if(location.pathname === '/login' || location.pathname === '/signup') {
//     return;
//   }
//   if(localStorage.getItem('token') === null) {
//     navigate("/login");
//   }
// }, [location.pathname])
  return (
    <div className="container">
      <Header/>
      <div className="main">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
};

export default Layout;
