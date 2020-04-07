import React from 'react'
import {connect, connectAdvanced} from 'react-redux'
import {MDBContainer,MDBCol,MDBRow,MDBTable, MDBTableBody, MDBTableHead ,MDBBtn} from 'mdbreact'
import ContactForm from './ContactForm'
import {startRemoveContact } from '../../actions/contactAction'
import { Link } from 'react-router-dom'

class ContactsPage extends React.Component {
    constructor(){
        super()
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    handleRemove = (id) => {
        this.props.dispatch(startRemoveContact(id))
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <h2 className="display-4 text-center">Contacts of {this.props.user && this.props.user.username} </h2>
                        <hr />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="9">
                        <h2 className="display-4 text-center" style={{fontSize:"40px",fontWeight:"350"}}>Listing contacts - {this.props.contacts && this.props.contacts.length} </h2>
                        <MDBTable>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Status</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                this.props.contacts && this.props.contacts.map((contact,i)=>{
                                    return (
                                        <tr key={contact._id}>
                                            <th> {i+1} </th>
                                            <th>{contact.name} </th>
                                            <th>{contact.mobile} </th>
                                            <th>{contact.email} </th>
                                            <th><Link to={`/contact/${contact._id}`}><MDBBtn color="info" size="sm">Edit</MDBBtn></Link>
                                            <MDBBtn color="danger" size="sm" onClick={()=>{this.handleRemove(contact._id)}}>remove</MDBBtn> </th>

                                        </tr>
                                    )
                                })
                            }
                        </MDBTableBody>
                        </MDBTable>
                        </MDBCol>
                    <MDBCol md="3">
                            <ContactForm />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        contacts : state.contacts
    }
}

export default connect(mapStateToProps)(ContactsPage)