import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CalcResultComponent from "./components/CalcResultComponent";
import CalcKeyPadComponent from "./components/CalcKeyPadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      calculatorOutput: "",
      operationStack:[]
    };

    this.onKeyPadClick = this.onKeyPadClick.bind(this);
  }

  

  onKeyPadClick(keyPadValue) {
    if (keyPadValue === "AC") {
      this.resetInput();
      return;
    } else if (keyPadValue === "C") {
      this.backSpace();
      return;
    } else if(keyPadValue === "+/-" && !isNaN(this.state.calculatorOutput)) {
       //Invert Current Input
      this.setState({
        calculatorOutput: String(this.state.calculatorOutput * -1)
      });
      return;
    }

    //Operand construction
    if(!isNaN(keyPadValue) || keyPadValue === ".") {
        this.setState({
        calculatorOutput: this.state.calculatorOutput + keyPadValue,
      });
    } else {
      //Operator
      if(keyPadValue !== "=" && this.state.calculatorOutput.length !== 0 && !isNaN(this.state.calculatorOutput)) {

        //If we're pressing operator, push the current output into stack, and operator

        var opStack = this.state.operationStack;
        opStack.push(this.state.calculatorOutput);
        opStack.push(keyPadValue);
      
        this.setState({
          calculatorOutput: "",
          operationStack: opStack
        })
      } else if(keyPadValue === "=" && this.state.operationStack.length > 2) {
         //Equals (Calculation) //TODO: CALCULATION
          
          //var opStack2 = this.state.operationStack;
          
          //opStack2.push(this.state.calculatorOutput);
          //if(keyPadValue !== "=")
          //{
           // sum = keyPadValue + this.state.operationStack;
           // opStack2.push(keyPadValue);
            
         // }
         
        
          
         
         if(keyPadValue === "+")
         {
          
         }
         if(keyPadValue === "-")
         {
           
         }
         if(keyPadValue === "x")
         {
           
         }
         if(keyPadValue === "/")
         {
           
         }
         var opStack = this.state.operationStack;
         opStack.push(this.state.calculatorOutput);
         opStack.push(keyPadValue);

         
         

         this.setState({
          calculatorOutput: this.state.calculatorOutput + keyPadValue
         });
         
         
            

      }
    } 
  }

  backSpace() {

    if(this.state.calculatorOutput.length === 0) {
      return;
    }

    this.setState({
      calculatorOutput: this.state.calculatorOutput.slice(0, -1)
    });
  }

  resetInput() {
    this.setState({
      calculatorOutput: ""
    });
  }

  render() {
    return (
      <div>
        <Jumbotron className="App-Title">
          <h1>Kevin's Calculator App</h1>
        </Jumbotron>
        <Container className="App-Container">
          <CalcResultComponent outputResult={this.state.calculatorOutput} />
          <CalcKeyPadComponent onClickEvent={this.onKeyPadClick} />
        </Container>
      </div>
    );
  }
}

export default App;
