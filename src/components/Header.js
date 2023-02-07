import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import LoginForm from '../features/login/LoginForm';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark expand='md' className='header' >
      <NavbarBrand className='navbar-brand' href='/' >
        <img src={logo} alt='React Logo' className='float-start App-logo' style={{ height: 180, width: 180 }} />
        </NavbarBrand>
        <div>
          <h1 className='largeTitleFontStyle textColorAnimation' >MowerTech Reactstyle</h1>
          <p className='pFontStyle' >4321 Fixit Dr.<br />YourTown, WA 22233</p>
          <h5 className='smallTitleFontStyle textColorAnimation' >Thanks for visiting my React Project. To find out more about the creator be sure to click the "Back to Resume" link.</h5>
        </div>
      

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' >
          <LoginForm className='mt-2' />
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg textColorAnimation' /> Home
            </NavLink>
            <NavLink className='nav-link' to='/aboutPage'>
              <i className='fa fa-star fa-lg textColorAnimation' /> About Us
            </NavLink>
            <NavLink className='nav-link' to='/contactPage'>
              <i className='fa fa-phone fa-lg textColorAnimation' /> Contact Us
            </NavLink>
            <NavLink className='nav-link' to='/schedulePage'>
              <i className='fa fa-clipboard fa-lg textColorAnimation' /> Schedule Now
            </NavLink>
            <NavLink className='nav-link' to='/forSalePage'>
              <i className='fa fa-recycle fa-lg textColorAnimation' /> Machines For Sale
            </NavLink>
            <NavLink className='nav-link' to='/inspectionPage'>
              <i className='fa fa-user fa-lg textColorAnimation' />  Techs Only
            </NavLink>
            <NavLink className='nav-link' to='/pp2'>
              <i className='fa fa-handshake-o fa-lg textColorAnimation' />  Back to Resume
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Header;



// const Header = () => {

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Navbar dark expand='md' className='header' >
//       <NavbarBrand className='navbar-brand' href='/' >
//         <img src={logo} alt='React Logo' className='float-start App-logo' style={{ height: 180, width: 180 }} />
//       </NavbarBrand>

//       <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
//       <Col>
//         <h1 className='largeTitleFontStyle textColorAnimation' >MowerTech Reactstyle</h1>
//         <p className='pFontStyle' >4321 Fixit Dr.<br />YourTown, WA 22233</p>
//       </Col>


//       <Collapse isOpen={menuOpen} navbar>
//         <Nav className='ms-auto' >
//           <LoginForm className='mt-2' />
//           <NavItem>
//             <NavLink className='nav-link' to='/'>
//               <i className='fa fa-home fa-lg' /> Home
//             </NavLink>
//             <NavLink className='nav-link' to='/aboutPage'>
//               <i className='fa fa-star fa-lg' /> About Us
//             </NavLink>
//             <NavLink className='nav-link' to='/contactPage'>
//               <i className='fa fa-phone fa-lg' /> Contact Us
//             </NavLink>
//             <NavLink className='nav-link' to='/schedulePage'>
//               <i className='fa fa-clipboard fa-lg' /> Schedule Now
//             </NavLink>
//             <NavLink className='nav-link' to='/forSalePage'>
//               <i className='fa fa-recycle fa-lg' /> Machines For Sale
//             </NavLink>
//             <NavLink className='nav-link' to='/inspectionPage'>
//               <i className='fa fa-user fa-lg' />  Techs Only
//             </NavLink>
//             <NavLink className='nav-link' to='/pp2'>
//               <i className='fa fa-handshake-o fa-lg' />  Back to Resume
//             </NavLink>
//           </NavItem>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   )
// };

// export default Header;