import { connect } from "react-redux";
import { Component } from "react";

class InformationContainerBlock extends Component {
	render() {
		return (
			<>
				{this.props.isDraw && (
					<h3 className={"text-2xl m-0 text-center text-[#bf4f74]"}>Ничья</h3>
				)}

				{!this.props.isDraw && this.props.isGameEnded && (
					<h3
						className={"text-2xl m-0 text-center text-[#bf4f74]"}
					>{`Победа: ${this.props.currentPlayer}`}</h3>
				)}

				{!this.props.isDraw && !this.props.isGameEnded && (
					<h3
						className={"text-2xl m-0 text-center text-[#bf4f74]"}
					>{`Ходит: ${this.props.currentPlayer}`}</h3>
				)}
			</>
		);
	}
}

const mapToStateProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationContainer = connect(mapToStateProps)(
	InformationContainerBlock,
);
