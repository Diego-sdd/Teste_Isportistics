import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import { MDBRow } from "mdbreact";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import api from '../service/api';
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme, charts);



class Graphic extends Component {


    chartData = [
        {
            label: "Apache",
            value: "32647479"
        },
        {
            label: "Microsoft",
            value: "22100932"
        },
        {
            label: "Zeus",
            value: "14376"
        },
        {
            label: "Other",
            value: "18674221"
        }
    ];

    chartConfigs = {
        type: "pie3d",
        width: "100%",
        height: "400",
        dataFormat: "JSON",
        dataSource: {
            chart: {
                caption: "Market Share of Web Servers",
                plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
                showlegend: "1",
                showpercentvalues: "1",
                legendposition: "bottom",
                usedataplotcolorforlabels: "1",
                theme: "fusion"
            },
            data: chartData
        }
    };


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

    render() {

        return (
            <MDBRow>
                <div className="aa">
                    {this.state.users.map(user => (
                        <h2 key={user._id}>{user.nm_name}</h2>
                    ))}
                </div>

                <ReactFusioncharts {...chartConfigs} />
            </MDBRow>
        );
    }
}

export default Graphic;