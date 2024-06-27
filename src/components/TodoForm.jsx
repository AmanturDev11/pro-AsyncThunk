import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodo, postTodos } from "../store/todoSlice/todoThunk";

const TodoForm = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			title,
		};
		dispatch(postTodos(newTodo));
		setTitle("");
	};

	useEffect(() => {
		dispatch(getTodo());
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default TodoForm;
