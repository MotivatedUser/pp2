import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

// import { Outlet, Link } from "react-router-dom";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

    return (
      <Navbar dark color='warning' expand='md'>
        <NavbarBrand className='navbar-brand' href='/' >
          <img src={logo} alt='React Logo' className='float-start App-logo' style={{ height:180, width:180 }}/>
          <h1 className='mt-1'>MowerTech React</h1>
        </NavbarBrand>

        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          
          <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' >
              <NavItem>
                <NavLink className='nav-link' to='/'>
                  <i className='fa fa-home fa-lg' /> Home
                </NavLink>
                <NavLink className='nav-link' to='/aboutPage'>
                  <i className='fa fa-star fa-lg' /> About Us
                </NavLink>
                <NavLink className='nav-link' to='/contactPage'>
                  <i className='fa fa-phone fa-lg' /> Contact Us
                </NavLink>
                <NavLink className='nav-link' to='/schedulePage'>
                  <i className='fa fa-clipboard fa-lg' /> Schedule Now
                </NavLink>
                <NavLink className='nav-link' to='/forSalePage'>
                  <i className='fa fa-recycle fa-lg' /> Machines For Sale
                </NavLink>
                <NavLink className='nav-link' to='/inspectionPage'>
                  <i className='fa fa-user fa-lg' /> Techs Only
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

      </Navbar>
    )
    
    // (
    //   <>
    //     <nav > 
    //       <div col='6'>
    //       <ul >
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/aboutPage">About Us</Link>
    //         </li>
    //         <li>
    //           <Link to="/contactPage">Contact Us</Link>
    //         </li>
    //         <li>
    //           <Link to="/schedulePage">Schedule Now</Link>
    //         </li>
    //         <li>
    //           <Link to="/inspectionPage">Techs Only</Link>
    //         </li>
            
    //       </ul>
    //       </div>
    //       <div className='App-logo' style={{ backgroundImage:`url(${logo})`, backgroundSize:'contain', height:180, width:180 }}>
    //         Fake Company Name
    //         10000 MowerTech Dr.
    //         Thatonetown, WA 99999
    //         (555) 123-4567
    //         </div>
    //     </nav>

    //   <Outlet />
        
        
    //     {/* <div>
    //       <h1>This is where the header components will show up</h1>
    //       <img src={logo} className="App-logo" alt="logo" height="200" width='200' />
    //     </div> */}
    //   </>
    // )
  };
  
  export default Header;