import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.nm_name}
                </td>
                <td>
                    {this.props.obj.ds_surname}
                </td>
                <td>
                    {this.props.obj.qt_participation}
                </td>

            </tr>
        );
    }
}

export default DataTable;