import dispatcher from "../dispatcher";

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos() {
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
			{
				id: 83838384,
				text: "Go Shipping",
				complete: false
			},
			{
				id: 45454545454,
				text: "Hug Wife",
				complete: true
			}
		]});
	}, 1000);
}
