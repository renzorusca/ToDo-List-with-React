import React from "react";
import TodoItems from "./TodoItem.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		if (this._inputElement !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = "";
		}
		e.preventDefault();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function(item) {
			return item.key !== key;
		});
		this.setState({ items: filteredItems });
	}

	render() {
		return (
			<div id="container" className="container">
				<div className="todoListMain">
					<div className="header">
						<h1>todos</h1>
						<form onSubmit={this.addItem}>
							<input
								ref={a => (this._inputElement = a)}
								placeholder="What's need to be done"
							/>
						</form>
						<div>
							<TodoItems
								entries={this.state.items}
								delete={this.deleteItem}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
