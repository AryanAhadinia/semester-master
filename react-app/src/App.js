import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";
import Week from "./components/Week";
import logo from "./termix.png";
import Departments from "./components/Departments";

class App extends Component {
    state = {
        currentState: 1,
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-row flex-fill">
                    <Sidebar
                        handleCurrentState={this.handleCurrentState}
                        currentState={this.state.currentState}
                    ></Sidebar>
                    <Col className="d-flex flex-column justify-content-center flex-fill">
                        <img
                            className="flex-fill"
                            id="termix-logo"
                            src={logo}
                            alt="Termix"
                        ></img>
                        <div className="d-flex justify-content-center">
                            <div className="w-100">{this.handleSidebar()}</div>
                            {this.state.currentState === 2 ? (
                                <div className="flex-grow-1 flex-shrink-1">
                                    <Departments></Departments>
                                </div>
                            ) : null}
                        </div>
                    </Col>
                </div>
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
