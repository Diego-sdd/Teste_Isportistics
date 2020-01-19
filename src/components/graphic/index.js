import React, { Component, Welcome } from "react";
import FusionCharts from "fusioncharts";
import { MDBRow } from "mdbreact";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import api from '../service/api';
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme, charts);


class Graphic extends Component {



    state = {
        users: []
    }
    componentDidMount() {
        this.loadUsers();
    }
    loadUsers = async () => {
        const reponse = await api.get("/users");
        this.setState({ users: reponse.data });
        console.log(reponse.data);
    }
    render() {

        const datavalor = [
            {
                label: 'Diego',
                value: '10'
            },
            {
                label: 'Rafa',
                value: '20'
            }, {
                label: 'Carlos',
                value: '15'
            },
            {
                label: 'Leandro',
                value: '12'
            }

        ]


        {/* <div className="aa">
                    {this.state.users.map(user => (
                        user.qt_participation
                    ))}
                </div> */}

        return (


            <ReactFusioncharts {...{
                type: "pie3d",
                width: "100%",
                height: "400",
                dataFormat: "JSON",
                dataSource: {
                    chart: {
                        showlegend: "1",
                        showpercentvalues: "1",
                        legendposition: "bottom",
                        usedataplotcolorforlabels: "1",
                        theme: "fusion"
                    },
                    data: datavalor
                }
            }}
            />




        );
    }
}

export default Graphic;