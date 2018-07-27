const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	titulo: String,
	valor: Number,
	estatus: {
		type: Boolean,
		default: false,
	}
});

module.exports = mongoose.model('tasks', TaskSchema);