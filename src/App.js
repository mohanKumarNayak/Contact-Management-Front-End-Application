import React from 'react';
import Register from './components/login&Register/Register'
import Login from './components/login&Register/Login'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink} from 'mdbreact'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogout } from './actions/userAction';
import ContactPage from './components/contatcs/contacts'
import EditContact from './components/contatcs/EditContact'

function App(props) {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to log-out from your account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log out!'
    }).then((result)=>{
        if(result.value){
          props.dispatch(startLogout())
        }
    })
  }
  return (
    <BrowserRouter>
    {
      Object.keys(props.user).length > 0 ? 
      <MDBNavbar color="green" dark expand="md">   
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/contact">Contacts</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/logout" onClick={handleLogout}>Logout</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
      <MDBNavbarBrand>
        <strong className="white-text">Contact Mangement</strong>
      </MDBNavbarBrand>
      </MDBNavbarNav>
  </MDBNavbar> : 
      <MDBNavbar color="green" dark expand="md">   
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/">Login</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/register">Register</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
      <MDBNavbarBrand>
        <strong className="white-text">Contact Mangement</strong>
      </MDBNavbarBrand>
      </MDBNavbarNav>
    </MDBNavbar>
    }
      


      <Route path="/" component={Login} exact={true} />
      <Route path="/register" component={Register} />

      <Route path="/contact" component={ContactPage} exact={true} />
      <Route path="/contact/:id" component={EditContact} />
      </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(App)


