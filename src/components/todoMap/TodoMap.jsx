/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/todoSlice/todoThunk";
import scss from "./TodoMap.module.scss";

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
		<div className={scss.TodoMap}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards} key={_id}>
						{isEditing ? (
							<div className={scss.card}>
								<input
									type="text"
									value={editedTitle}
									onChange={(e) => setEditedTitle(e.target.value)}
								/>
								<button onClick={handleSave}>Save</button>
								<button onClick={handleCancel}>Cancel</button>
							</div>
						) : (
							<div className={scss.card2}>
								<h2>{title}</h2>
								<button onClick={() => handleDelete(_id)}>Delete</button>
								<button onClick={handleEdit}>Edit</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoMap;
