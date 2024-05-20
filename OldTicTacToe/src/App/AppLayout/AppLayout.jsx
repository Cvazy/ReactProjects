import { InformationContainer } from "../../components/Information/InformationContainer";
import { FieldContainer } from "../../components/Field/FieldContainer";
import { connect } from "react-redux";
import { START_OVER } from "../../actions";
import { Component } from "react";

class AppLayoutContainer extends Component {
	constructor(props) {
		super(props);

		this.handlerStartOver = this.handlerStartOver.bind(this);
	}

	handlerStartOver() {
		this.props.dispatch(START_OVER);
	}

	render() {
		return (
			<div className={"flex items-center justify-center w-full min-h-screen"}>
				<div className={"flex flex-col items-center gap-3 w-1/2"}>
					<h1 className={"text-4xl text-[#bf4f74] m-0"}>Tic Tac Toe</h1>

					<InformationContainer />

					{this.props.isGameEnded && (
						<button
							type={"button"}
							className={
								"text-xl text-[#ffefd5] rounded-xl px-4 py-3 w-full bg-[#bf4f74] hover:opacity-80"
							}
							onClick={this.handlerStartOver}
						>
							Start Over
						</button>
					)}

					<FieldContainer />
				</div>
			</div>
		);
	}
}

const mapToStateProps = (state) => ({
	isGameEnded: state.isGameEnded,
});

export const AppLayout = connect(mapToStateProps)(AppLayoutContainer);
