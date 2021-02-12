import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";
import Week from "./components/Week";
import logo from "./termix.png";

class App extends Component {
    state = {
        currentState: 1,
    };

    render() {
        return (
            <React.Fragment>
                <Row style={{ height: "100vh" }}>
                    <Sidebar
                        handleCurrentState={this.handleCurrentState}
                        currentState={this.state.currentState}
                    ></Sidebar>
                    <Col>
                        <img id="termix-logo" src={logo} alt="Termix"></img>
                        {this.handleSidebar()}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

    handleCurrentState = (state) => {
        this.setState({ currentState: state });
    };

    handleSidebar = () => {
        switch (this.state.currentState) {
            case 1:
                return <Card></Card>;
            case 2:
                return <Week></Week>;
            default:
                return null;
        }
    };
}

export default App;
