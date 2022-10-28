const path = require('path');
var todoList = [];

const controller = {
    error: (req, res)=>{
        const model = {
            apptitle: '404',
            description: 'Not Found'
        }

        res.render('404_ERROR', model);
    },
    index: (req, res)=>{
        const todoListSize = todoList.length;
        const model = {
            appTitle: 'TODO app',
            listTitle: 'TODO list',
            todoList: todoList,
            todoListSize: todoListSize
        }

        res.render('index', model);
    },
    create: (req, res)=>{
        const todo = req.body.todo_text;
        const todoArray = todo.split(', ');

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function addNewTodo(todo){
            const todoCapitalized = capitalizeFirstLetter(todo);
            if(todoCapitalized !== '' && !todoList.includes(todoCapitalized)){
                todoList.push(todoCapitalized);
            };

        }

        for(const item of todoArray){
            addNewTodo(item);
        }

        return res.redirect(req.originalUrl);
    },
    remove: (req, res)=>{
        const todoToRemove = req.params.value;
        todoList = todoList.filter(item => item !== todoToRemove);
        
        return res.redirect('/');
    }
}

module.exports = controller;