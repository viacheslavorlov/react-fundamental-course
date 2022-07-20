import React, {Component} from 'react';


class ClassCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			value: ''
		}
	}


	increment = () => {
		this.setState({count: this.state.count + 1})
	}

	decrement = () => {
		this.setState({count: this.state.count - 1})
	}

	setValue = (value) => {
		this.setState({value: value})
	}


	render() {
		return (
			<div>
				<h1>Классовый кмпонент</h1>
				<input
					placeholder={'введите текст'}
					type="text"
					value={this.state.value}
					onChange={event => this.setValue(event.target.value)}/> {/* двустороннее связывание - value элемента
			 передаётся в состояние через функцию setValue*/}
				<div>{this.state.value}</div>
				<button onClick={this.increment}>increment</button>
				<button onClick={this.decrement}>decrement</button>
				<div>{this.state.count}</div>

			</div>
		);
	}
}

ClassCounter.propTypes = {};

export default ClassCounter;