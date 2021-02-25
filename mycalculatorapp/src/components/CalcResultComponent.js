
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/CalcResultComponent.css'

class CalcResultComponent extends Component {


    render() {
        let {outputResult} = this.props;
        return(
            <Container className="result-window">
                <h1>{outputResult}</h1>
            </Container>
        );
    }
}

export default CalcResultComponent;