import {Schema, model, models} from 'mongoose';

const TodoSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Todo = models['Todo'] || model('Todo', TodoSchema);

export default Todo;
