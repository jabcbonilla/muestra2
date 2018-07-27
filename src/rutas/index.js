const express = require('express');
const rutas = express.Router();

const Task = require('../modelos/task');

rutas.get('/', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('index', {
		tasks
	});
});

rutas.post('/agregar', async (req, res) => {
	const task = new Task(req.body);
	await task.save();	
	res.redirect('/');

});

rutas.get('/listo/:id', async (req, res) => {
	const {id} = req.params;
	const task = await Task.findById(id);
	task.estatus = !task.estatus;
	await task.save();
	res.redirect('/');
});

rutas.get('/editar/:id', async (req, res) => {
	const {id} = req.params;
	const task = await Task.findById(id);
	res.render('graficas', {
		task
	});
})

rutas.post('/actualizar/:id', async (req, res) => {
	const {id} = req.params;
	await Task.update({_id: id}, req.body);
	res. redirect('/')
})
rutas.get('/eliminar/:id', async (req, res) => {
	const {id} = req.params;
	await Task.remove({_id: id});
	res.redirect('/');

})
module.exports = rutas;