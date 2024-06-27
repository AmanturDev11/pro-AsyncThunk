import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	deleteAllTodo,
	getTodo,
	postTodos,
} from "../../store/todoSlice/todoThunk";
import scss from "./TodoForm.module.scss";

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

	const handleDeleteAll = () => {
		dispatch(deleteAllTodo());
	};

	useEffect(() => {
		dispatch(getTodo());
	}, []);

	return (
		<div className={scss.TodoForm}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<button type="submit">Add</button>
						<button type="button" onClick={handleDeleteAll}>
							deleteAll
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoForm;
