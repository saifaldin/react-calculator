import React from "react";

const Buttons = (props) => {
	const doOperation = (e) => {
		const operation = e.target.innerText;
		if (isNaN(parseInt(props.prevOperand))) {
			return `${props.currOperand} ${operation}`;
			// const prevOperand = `${props.currOperand} ${operation}`;
			// props.updateDisplay(operation, "", prevOperand, props.history);
			// return;
		}
		switch (props.operation) {
			case "+":
				return `${
					parseFloat(props.prevOperand) + parseFloat(props.currOperand)
				} ${operation}`;
			// props.updateDisplay(
			// 	operation,
			// 	"",
			// 	`${parseFloat(props.prevOperand) + parseFloat(props.currOperand)} ${operation}`,
			// 	[
			// 		...props.history,
			// 		parseFloat(props.prevOperand) + parseFloat(props.currOperand),
			// 	]
			// );
			// break;
			case "-":
				return `${
					parseFloat(props.prevOperand) - parseFloat(props.currOperand)
				} ${operation}`;
			// props.updateDisplay(
			// 	operation,
			// 	"",
			// 	`${parseFloat(props.prevOperand) - parseFloat(props.currOperand)} ${operation}`,
			// 	[
			// 		...props.history,
			// 		parseFloat(props.prevOperand) - parseFloat(props.currOperand),
			// 	]
			// );
			// break;
			case "÷":
				if (props.currOperand === "0") break;
				let result = parseFloat(props.prevOperand) / parseFloat(props.currOperand);
				if (result.toString().split(".")[1].length > 2) {
					result = result.toFixed(4);
				}
				return `${result} ${operation}`;
			// props.updateDisplay(
			// 	operation,
			// 	"",
			// 	`${parseFloat(props.prevOperand) / parseFloat(props.currOperand)} ${operation}`,
			// 	[
			// 		...props.history,
			// 		parseFloat(props.prevOperand) / parseFloat(props.currOperand),
			// 	]
			// );
			// break;
			case "×":
				return `${
					parseFloat(props.prevOperand) * parseFloat(props.currOperand)
				} ${operation}`;
			// props.updateDisplay(
			// 	operation,
			// 	"",
			// 	`${parseFloat(props.prevOperand) * parseFloat(props.currOperand)} ${operation}`,
			// 	[
			// 		...props.history,
			// 		parseFloat(props.prevOperand) * parseFloat(props.currOperand),
			// 	]
			// );
			// break;
			default:
		}
	};

	const handleOperation = (e) => {
		if (isNaN(parseInt(props.currOperand))) return;
		const prevOperand = doOperation(e);
		const operation = e.target.innerText;
		if (isNaN(parseInt(props.prevOperand))) {
			props.updateDisplay(operation, "", prevOperand, props.history);
			return;
		}
		props.updateDisplay(
			e.target.innerText,
			"",
			prevOperand,
			prevOperand ? [...props.history, prevOperand] : props.history
		);
	};

	const computeBtn = (e) => {
		if (isNaN(parseFloat(props.currOperand)) || isNaN(parseFloat(props.prevOperand))) {
			return;
		}
		const prevOperand = doOperation(e);
		const currOperand = prevOperand.split(" ")[0];
		props.updateDisplay(props.operation, currOperand, "", [...props.history, currOperand]);
	};
	const numBtn = (e) => {
		if (e.target.innerText === "." && props.currOperand.toString().includes(".")) return;
		const currOperand = props.currOperand.toString() + e.target.innerText.toString();
		props.updateDisplay(props.operation, currOperand, props.prevOperand, props.history);
	};
	const allClear = () => {
		props.updateDisplay("", "", "", props.history);
	};
	const del = () => {
		const deleteLast = props.currOperand.toString().slice(0, -1);
		props.updateDisplay(props.operation, deleteLast, props.prevOperand, props.history);
	};
	const Number = () => {
		const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."].map((num) => {
			return (
				<button
					onClick={(e) => {
						numBtn(e);
					}}
					id={Math.random()}
				>
					{num}
				</button>
			);
		});
		return numbers;
	};

	const Operation = () => {
		const operations = ["+", "-", "×", "÷"].map((opr) => {
			return (
				<button onClick={handleOperation} id={Math.random()}>
					{opr}
				</button>
			);
		});
		return operations;
	};

	return (
		<div>
			<button
				onClick={() => {
					allClear();
				}}
				id="ac"
				className="span2"
			>
				AC
			</button>
			<button
				onClick={() => {
					del();
				}}
				id="del"
			>
				DEL
			</button>
			<Number thiss={this} />
			<Operation thiss={this} />
			<button
				onClick={(e) => {
					computeBtn(e);
				}}
				id="equals"
				className="span2"
			>
				=
			</button>
		</div>
	);
};

export default Buttons;
