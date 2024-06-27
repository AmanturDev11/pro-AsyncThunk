import { useSelector } from "react-redux";
import TodoMap from "./TodoMap";

const TodoList = () => {
	const { todo } = useSelector((state) => state.todo);
	console.log(todo);
	return (
		<div>
			{todo?.map((item) => (
				<TodoMap key={item._id} {...item} />
			))}
		</div>
	);
};

export default TodoList;
