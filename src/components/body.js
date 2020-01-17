import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon, MDBInput, MDBDataTable } from "mdbreact";
import './style.css';
import $ from 'jquery';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


const data = {
    columns: [
        {
            label: 'First Name',
            field: 'FirstName',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Last Name',
            field: 'LastName',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Participation',
            field: 'Participation',
            sort: 'asc',
            width: 200
        }
    ],
    rows: [
        {
            FirstName: 'Tiger Nixon',
            LastName: 'System Architect',
            Participation: '20%',

        },
        {
            FirstName: 'Tiger Nixon',
            LastName: 'System Architect',
            Participation: '20%',
        },
    ]
};





ReactFusioncharts.fcRoot(FusionCharts, FusionTheme, charts);

const chartData = [
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

const chartConfigs = {
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




class Body extends Component {


    render() {

        return (

            <MDBContainer fluid className="body">
                <MDBRow>
                    <MDBCol md="12">
                        <div className="body_header">
                            <h1 className="title">Data</h1>
                            <p>Um backlog é uma lista de itens priorizados a serem desenvolvidos para um software.</p>
                        </div>
                    </MDBCol>
                    <MDBCol md="2">

                    </MDBCol>
                    <MDBCol md="4">
                        <MDBDataTable
                            striped
                            bordered
                            hover
                            data={data}
                        />
                    </MDBCol>
                    <MDBCol md="5">
                        <ReactFusioncharts {...chartConfigs} />
                    </MDBCol>
                    <MDBCol md="2">

                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        );
    }
}
export default Body;

