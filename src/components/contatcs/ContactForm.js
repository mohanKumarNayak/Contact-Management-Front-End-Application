import React from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBBtn, MDBInput} from 'mdbreact'
import { connect } from 'react-redux'
import {startAddContact} from '../../actions/contactAction'

class ContactForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            email : '',
            mobile : ''

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

        this.props.dispatch(startAddContact({formData}))

        this.setState({
            name : '',
            email : '',
            mobile : ''
        })
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <h2 className="display-4 text-center" style={{fontSize:"40px",fontWeight:"350"}}>Add Contact</h2>
                    </MDBCol>
                    <MDBCol>
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
                        <MDBBtn color="success" className="btn-block" type="submit">Add Contact</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default connect()(ContactForm)