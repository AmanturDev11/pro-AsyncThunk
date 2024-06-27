/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice/todoThunk";

const TodoMap = ({ _id, title }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title);

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedTitle(title);
	};

	const handleSave = () => {
		dispatch(
			updateTodo({
				_id,
				title: editedTitle,
			})
		);
		setIsEditing(false);
	};

	return (
		<div key={_id}>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
					/>
					<button onClick={handleSave}>Save</button>
					<button onClick={handleCancel}>Cancel</button>
				</div>
			) : (
				<div>
					<h2>{title}</h2>
					<button onClick={() => handleDelete(_id)}>Delete</button>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
};

export default TodoMap;
