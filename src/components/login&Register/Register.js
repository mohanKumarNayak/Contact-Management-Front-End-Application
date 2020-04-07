import React from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBBtn, MDBInput} from 'mdbreact'
import { connect } from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password : ''

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
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startRegisterUser({formData}))
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <h2 className="display-4 text-center">Registration From</h2>
                    </MDBCol>
                    <MDBCol md="6" className="offset-md-3">
                    <form onSubmit={this.handleSubmit}> 
                        <div className="grey-text">
                        <MDBInput label="UserName" icon="user" group type="text" validate error="wrong"
                            success="right" onChange={this.handleChange} name="username" value={this.state.username} />
                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} name="email" value={this.state.email} />
                        <MDBInput label="Your password" icon="lock" group type="password" validate onChange={this.handleChange} name="password" value={this.state.password} />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="success" className="btn-block" type="submit">Register</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default connect()(Register)