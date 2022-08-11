import connectDB from '../../../database/dbConnect';
import Todo from '../../../models/Todo.schema';

async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const todos = await Todo.find({userId: req.query.id}).sort({createdAt: -1});
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

	if (req.method === 'PUT') {
		try {
			const todo = await Todo.findByIdAndUpdate(req.query.id, req.body, {new: true});

			return res.status(200).json({
				statusCode: 200,
				data: todo,
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
