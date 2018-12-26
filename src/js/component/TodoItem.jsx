import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	delete(key) {
		this.props.delete(key);
	}
	createTasks(item) {
		return (
			<li onClick={() => this.delete(item.key)} key={item.key}>
				{item.text}
				<span>
					<i className="fa fa-trash" />
				</span>
			</li>
		);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		return <ul className="theList">{listItems}</ul>;
	}
}

TodoItems.propTypes = {
	entries: PropTypes.object,
	delete: PropTypes.object
};

export default TodoItems;
