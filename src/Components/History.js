import React from "react";

const History = (props) => {
	const toggleHistory = (e) => {
		console.log(props.history);
		props.updateDisplay(props.operation, props.currOperand, props.prevOperand, props.history);
		e.target.parentNode.children[1].classList.toggle("visible");
	};
	const history = props.history.map((ans) => {
		return (
			<li
				onClick={(e) => {
					props.updateDisplay("", e.target.innerText, "", props.history);
				}}
			>
				{ans}
			</li>
		);
	});
	return (
		<div>
			<h2 onClick={toggleHistory}>History</h2>
			<ul>{history}</ul>
		</div>
	);
};

export default History;
