const path = require('path');
var todoList = [];

const controller = {
    error: (req, res)=>{
        var model = {
            apptitle: '404',
            description: 'Not Found'
        }

        res.render('404_ERROR', model);
    },
    index: (req, res)=>{
        var todoListSize = todoList.length;
        var model = {
            appTitle: 'TODO app',
            listTitle: 'TODO list',
            todoList: todoList,
            todoListSize: todoListSize
        }

        res.render('index', model);
    },
    create: (req, res)=>{
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        var value = capitalizeFirstLetter(req.body.todo_text);
        if(value !== '' && !todoList.includes(value)){
            todoList.push(value);
        };

        return res.redirect(req.originalUrl);
    },
    remove: (req, res)=>{
        var value = req.params.value;
        todoList = todoList.filter(item => item !== value);
        
        return res.redirect('/');
    }
}

module.exports = controller;