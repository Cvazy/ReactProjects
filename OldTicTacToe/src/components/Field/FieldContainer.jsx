import { connect } from "react-redux";
import { setCell } from "../../actions";
import { Component } from "react";

class FieldContainerBlock extends Component {
	constructor(props) {
		super(props);

		this.handlerStartOver = this.handlerStartOver.bind(this);
	}

	handlerStartOver(index) {
		this.props.dispatch(setCell(index));
	}

	render() {
		return (
			<div className={"grid grid-cols-3 bg-[#bf4f74] rounded-2xl w-full"}>
				{this.props.field.map((el, index) => {
					return (
						<button
							key={index}
							type={"button"}
							onClick={() => this.handlerStartOver(index)}
							disabled={
								this.props.isGameEnded || this.props.isDraw || el !== ""
							}
							className={
								"text-6xl text-[#ffefd5] bg-[#bf4f74] p-4 min-h-[100px] uppercase hover:bg-[#873952] first:rounded-tl-2xl [&:nth-child(3)]:rounded-tr-2xl [&:nth-child(7)]:rounded-bl-2xl last:rounded-br-2xl disabled:cursor-not-allowed disabled:hover:bg-[#bf4f74]"
							}
						>
							{el}
						</button>
					);
				})}
			</div>
		);
	}
}

const mapToStateProps = (state) => ({
	field: state.field,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
});

export const FieldContainer = connect(mapToStateProps)(FieldContainerBlock);
