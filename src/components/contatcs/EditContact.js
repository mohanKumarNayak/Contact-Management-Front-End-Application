import React from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBBtn, MDBInput} from 'mdbreact'
import { connect } from 'react-redux'
import {startUpdateContact} from '../../actions/contactAction'
import { withRouter } from 'react-router-dom'

class EditContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : this.props.contact ? this.props.contact.name : '',
            email : this.props.contact ? this.props.contact.email : '',
            mobile : this.props.contact ? this.props.contact.mobile : ''

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile
        }
        const id = this.props.contact._id
        this.props.dispatch(startUpdateContact({id,formData}))


        
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <h2 className="display-4 text-center" style={{fontSize:"40px",fontWeight:"350"}}>Edit Contact</h2>
                    </MDBCol>
                    <MDBCol md="6" className="offset-md-3"> 
                    <form onSubmit={this.handleSubmit}> 
                        <div className="grey-text">
                        <MDBInput label="Contact Name" icon="user" group type="text" validate error="wrong"
                            success="right" onChange={this.handleChange} name="name" value={this.state.name} />

                        <MDBInput label="Mobile" icon="envelope" group type="text" validate error="wrong"
                            success="right" onChange={this.handleChange} name="mobile" value={this.state.mobile} />   

                        <MDBInput label="Email" icon="phone-alt" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} name="email" value={this.state.email} />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="success" className="btn-block" type="submit">Save Contact</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        contact : state.contacts.find(contact=>contact._id == id)
    }
}

export default withRouter(connect(mapStateToProps)(EditContactForm))