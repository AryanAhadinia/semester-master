import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";
import Week from "./components/Week";
import logo from "./termix.png";
import Departments from "./components/Departments";
import TableContainer from "./components/TableContainer";
import Timetable from "./components/Timetable";

class App extends Component {
    state = {
        currentState: 1,
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-row flex-fill h-100">
                    <Sidebar
                        handleCurrentState={this.handleCurrentState}
                        currentState={this.state.currentState}
                    ></Sidebar>
                    <Col className="d-flex flex-column justify-content-start align-items-center flex-fill main-section">
                        {/* <img id="termix-logo" src={logo} alt="Termix"></img> */}
                        <div
                            className="d-flex justify-content-between w-100 h-100"
                            style={{ margin: "15px auto" }}
                        >
                            {this.handleSidebar()}
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
                return (
                    <div className="w-100">
                        <Card></Card>
                    </div>
                );
            case 2:
                // return <Week></Week>;
                return <Timetable></Timetable>;
            case 3:
                return <TableContainer></TableContainer>;
            default:
                return null;
        }
    };
}

export default App;
