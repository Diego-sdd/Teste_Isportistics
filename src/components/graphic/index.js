import React, { Component } from "react";
import FusionCharts from "fusioncharts";
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
    }

    datavalor() {
        return [
            {
                label: 'Diego Dias',
                value: '10'
            },
            {
                label: 'Carla Mello',
                value: '5'
            },
            {
                label: 'Roberto',
                value: '8'
            },
        ];
    }



    render() {

        return (
            <ReactFusioncharts {...{
                type: "pie2d",
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
                    data: this.datavalor()
                }
            }}
            />
        );
    }
}

export default Graphic;