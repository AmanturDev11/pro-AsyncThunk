import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice/todoThunk";

/* eslint-disable react/prop-types */
const TodoMap = ({ _id, title }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};
	return (
		<div key={_id}>
			<h2>{title}</h2>
			<button onClick={() => handleDelete(_id)}>delete</button>
		</div>
	);
};

export default TodoMap;
