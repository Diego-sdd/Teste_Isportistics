import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

class DataTable extends Component {

    // handleClick = async () => {
    //     const Swal = require('sweetalert2');
    //     const { value: formValues } = await Swal.fire({
    //         title: 'Multiple inputs',
    //         html:
    //             '<input id="swal-input1" class="swal2-input">' +
    //             '<input id="swal-input2" class="swal2-input">',
    //         focusConfirm: false,
    //         preConfirm: () => {
    //             return [
    //                 document.getElementById('swal-input1').value,
    //                 document.getElementById('swal-input2').value
    //             ]
    //         }
    //     })

    //     if (formValues) {
    //         Swal.fire(JSON.stringify(formValues))
    //     }
    // }


    state = {
        id: '',
    }


    handleChange = event => {
        this.setState({ id: event.target.value });
    }


    handleSubmit(e) {
        e.preventDefault()

        axios.delete(`localhost:8080/users/delete/${this.state.id}`)
            .then((res) => {
                const Swal = require('sweetalert2');
                Swal.fire({
                    title: 'Cadastro Realizado com Sucesso',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                })
            }).catch((error) => {
                console.log(error)
            });


    }

    render() {

        return (


            <tr>
                <td id="name">
                    {this.props.obj.nm_name}
                </td>
                <td id="lname">
                    {this.props.obj.ds_surname}
                </td>
                <td id="participation">
                    {this.props.obj.qt_participation}%
                </td>
                {/* <td>
                    <form onSubmit={this.handleSubmit}>

                        <input type="text" name="id" onChange={this.handleChange} value={this.props.obj._id} />

                        <button type="submit" value="Create User">Delete</button>
                    </form>
                </td> */}

            </tr>

        );
    }
}

export default DataTable;