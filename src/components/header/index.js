import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './style.css';

class NavbarPage extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserlName = this.onChangeUserlName.bind(this);
        this.onChangeUserSurname = this.onChangeUserSurname.bind(this);
        this.onChangeUserparticipation = this.onChangeUserparticipation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nm_name: '',
            ds_surname: '',
            qt_participation: ''
        }
    }

    onChangeUserlName(e) {
        this.setState({ nm_name: e.target.value })
    }

    onChangeUserSurname(e) {
        this.setState({ ds_surname: e.target.value })
    }
    onChangeUserparticipation(e) {
        this.setState({ qt_participation: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            nm_name: this.state.nm_name,
            ds_surname: this.state.ds_surname,
            qt_participation: this.state.qt_participation
        };

        axios.post('http://localhost:8080/users/create', userObject)
            .then((res) => {
                const Swal = require('sweetalert2');
                Swal.fire({
                    title: 'Cadastro Realizado com Sucesso',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                }).then(function () {
                    window.location.reload();
                }
                );
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ nm_name: '', ds_surname: '', qt_participation: '' })
    }



    render() {
        return (
            <Router>
                <form onSubmit={this.onSubmit} >
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
                                    value={this.state.nm_name} onChange={this.onChangeUserlName}
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    id="defaultFormRegisterNameEx"
                                    required
                                />
                            </MDBCol>
                            <MDBCol md="2" sm="6">
                                <input
                                    value={this.state.ds_surname} onChange={this.onChangeUserSurname}
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    id="defaultFormRegisterEmailEx2"
                                    required
                                />
                            </MDBCol>
                            <MDBCol md="2" sm="6" xs="6">
                                <input
                                    value={this.state.qt_participation} onChange={this.onChangeUserparticipation}
                                    type="text"
                                    className="form-control"
                                    placeholder="Participation"
                                    id="defaultFormRegisterConfirmEx3"
                                    required
                                />

                            </MDBCol>
                            <MDBCol md="2" sm="6">
                                <div className="form-group ">
                                    <input type="submit" value="Create User" className="btn_cadastrar" />
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </form>
            </Router>
        );
    }
}

export default NavbarPage;