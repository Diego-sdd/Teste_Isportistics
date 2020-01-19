import React, { Component } from "react";
import { MDBDataTable, MDBRow } from "mdbreact";
import axios from 'axios';
import DataTable from './data-table';
import './style.css';


export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }


    render() {
        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <td id="name">Name</td>
                        <td id="lname">Last Name</td>
                        <td id="participation">Participation</td>
                    </tr>
                </thead>
                <tbody>
                    {this.dataTable()}
                </tbody>

            </table>

        );
    }
}