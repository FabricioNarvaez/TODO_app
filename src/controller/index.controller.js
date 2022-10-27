const path = require('path');

var todoList = [];

const controller = {
    index: (req, res)=>{
        res.render('index', {
            title: 'TODO app',
            todoList: todoList
        });
    },
    update: (req, res)=>{
        var value = req.body.text;
        if(!todoList.includes(value)){
            todoList.push(value);
        };

        return res.redirect('/');
    }
}

module.exports = controller;