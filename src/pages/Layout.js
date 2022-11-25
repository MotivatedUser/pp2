import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutPage">About Us</Link>
          </li>
          <li>
            <Link to="/contactPage">Contact Us</Link>
          </li>
          <li>
            <Link to="/schedulePage">Schedule Now</Link>
          </li>
          <li>
            <Link to="/inspectionPage">Techs Only</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;