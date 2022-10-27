var todoList = [];

const controller = {
    index: (req, res)=>{
        var todoListSize = todoList.length;
        var model = {
            title: 'TODO app',
            listTitle: 'TODO list',
            todoListSize: todoListSize,
            todoList: todoList
        }

        res.render('index', model);
    },
    update: (req, res)=>{
        var value = req.body.todo_text;
        if(!todoList.includes(value)){
            todoList.push(value);
        };

        return res.redirect(req.originalUrl);
    }
}

module.exports = controller;