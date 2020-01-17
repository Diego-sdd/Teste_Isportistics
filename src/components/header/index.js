import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <Router>
                <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                    <MDBContainer fluid className="header_body">
                        <MDBRow>
                            <MDBCol md="12">
                                <div className="body_header_show">
                                    <h1 className="title">Data</h1>
                                    <p>Um backlog é uma lista de itens priorizados a serem desenvolvidos para um software.</p>
                                </div>
                            </MDBCol>
                            <MDBCol md="2">
                            </MDBCol>
                            <MDBCol sm="6" md="2" className="primary">
                                <input
                                    value={this.state.fname}
                                    name="fname"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                    placeholder="First name"
                                    required
                                />

                            </MDBCol>
                            <MDBCol md="2" sm="6">

                                <input
                                    value={this.state.lname}
                                    name="lname"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterEmailEx2"
                                    className="form-control"
                                    placeholder="Last name"
                                    required
                                />

                            </MDBCol>
                            <MDBCol md="2" sm="6" xs="6">
                                <input
                                    value={this.state.fname}
                                    name="fname"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                    placeholder="First name"
                                    required
                                />

                            </MDBCol>
                            <MDBCol md="2" sm="6">
                                <MDBBtn color="default" type="submit" className="btn_cadastrar">
                                    Cadastrar
                            <MDBIcon icon="magic" className="ml-1" />
                                </MDBBtn>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </form>
            </Router>
        );
    }
}

export default NavbarPage;