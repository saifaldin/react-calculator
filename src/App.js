import React, { Component } from "react";
import Buttons from "./Components/Buttons";
import History from "./Components/History";
import "./App.css";

class App extends Component {
	state = {
		operation: "",
		currOperand: "",
		prevOperand: "",
		history: [],
	};

	updateDisplay = (operation, currOperand, prevOperand, history) => {
		this.setState(
			{
				operation,
				currOperand,
				prevOperand,
				history,
			}
		);
	};
	render() {
		return (
			<div className="container">
				<div className="output">
					<div className="prev-operand">{this.state.prevOperand}</div>
					<div className="curr-operand">{this.state.currOperand}</div>
				</div>
				<Buttons
					updateDisplay={this.updateDisplay}
					operation={this.state.operation}
					currOperand={this.state.currOperand}
					prevOperand={this.state.prevOperand}
					history={this.state.history}
				/>
				<History
					updateDisplay={this.updateDisplay}
					operation={this.state.operation}
					currOperand={this.state.currOperand}
					prevOperand={this.state.prevOperand}
					history={this.state.history}
				/>
			</div>
		);
	}
}

export default App;
