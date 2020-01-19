import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import './style.css';
import Graphic from './graphic/index';
import Table from './table/index';


class Body extends Component {
    render() {
        return (
            <MDBContainer fluid className="body">
                <MDBRow>
                    <MDBCol md="12">
                        <div className="body_header">
                            <h1 className="title">Data</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in porttitor tortor. </p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row_content">
                    <MDBCol md="1">

                    </MDBCol>
                    <MDBCol md="5">
                        <Table />
                    </MDBCol>
                    <MDBCol md="5">
                        <Graphic />
                    </MDBCol>
                    <MDBCol md="1">

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default Body;

