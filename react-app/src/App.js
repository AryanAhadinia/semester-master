import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";
import Week from "./components/Week"

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Row style={{ height: "100%" }}>
                    
                    <Week></Week>
                </Row>
               
            </React.Fragment>
        );
    }
}

export default App;
