import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Row style={{ height: "100%" }}>
                    <Sidebar></Sidebar>
                    <Col>
                        <h1> Terminator </h1>
                        <Card style={{ width: "100%" }}></Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default App;
