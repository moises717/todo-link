import connectDB from '../../../database/dbConnect';
import Todo from '../../../models/Todo.schema';

async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const {title, userId} = req.body;
			const todo = new Todo({title, userId});
			await todo.save();

			return res.status(200).json({
				statusCode: 200,
				message: 'Todo created',
			});
		} catch (error) {
			return res.status(500).json({
				statusCode: 500,
				message: 'Internal server error',
			});
		}
	}

	if (req.method === 'GET') {
		try {
			const todos = await Todo.find({userId: req.query.userId});
			return res.status(200).json({
				statusCode: 200,
				data: todos,
			});
		} catch (error) {
			return res.status(500).json({
				statusCode: 500,
				message: 'Internal server error',
			});
		}
	}
}

export default connectDB(handler);
