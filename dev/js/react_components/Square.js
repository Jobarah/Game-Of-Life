import React from 'react';

export default class Square extends React.Component {
	constructor() {

		super();
		this.state = {
			alive: false
		};
	}

	handleClick(e) {

		this.setState({ alive: !this.state.alive });
		// console.log(this.props.key);
		this.props.onUpdate(this);
	}

	render() {

		const { handleClick } = this;
		const status = (this.state.alive) ? 'alive' : null;

		return (
			<button className={ 'square ' + status } key={this.props.key} onClick={ this.handleClick.bind(this) }>
			</button>
		);
	}
}

Square.propTypes = {
	onUpdate: React.PropTypes.func
};