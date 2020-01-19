import React, { Component } from 'react';
import './style.css';



class DataTable extends Component {

    render() {
        return (
            <tr>
                <td id="id">
                    {this.props.obj.__v}
                </td>
                <td id="name">
                    {this.props.obj.nm_name}
                </td>
                <td id="lname">
                    {this.props.obj.ds_surname}
                </td>
                <td id="participation">
                    {this.props.obj.qt_participation}%
                </td>
            </tr>
        );
    }
}

export default DataTable;