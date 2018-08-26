"use strict";

var TodoCtrl = function(Todo){

	var TodoObj = {};

	TodoObj.PostTodo = function(req, res, next){
		var newTodo = new Todo(req.body);
		newTodo.save(function(err, todo){
			if(err){
				res.json({status: false, error: err.message});
				return;
			}
			res.json({status: true, todo: todo});
		});
	}

	TodoObj.GetTodo = function(req, res, next){
		Todo.find(function(err, todos){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return
			}
			res.json({status: true, todo: todos});
		});
	}

	TodoObj.UpdateTodo = function(req, res, next){
		var completed = req.body.completed;
		Todo.findById(req.params.todo_id, function(err, todo){
			todo.completed = completed;
			todo.save(function(err, todo){
				if(err) {
					res.json({status: false, error: "Status not updated"});
				}
				res.json({status: true, message: "Status updated successfully"});
			});
		});
	}

	TodoObj.DeleteTodo = function(req, res, next){
		Todo.deleteOne({_id : req.params.todo_id }, function(err, todos){
			if(err) {
				res.json({status: false, error: "Deleting todo is not successfull"});
			}
			res.json({status: true, message: "Todo deleted successfully"});
		});
	}

	return TodoObj;
}

module.exports = TodoCtrl;
