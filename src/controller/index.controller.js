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
        const todoArray = todo.split(';');

        function capitalizeFirstLetter(string) {
            string = string.trim();
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function addNewTodo(todo){
            const todoCapitalized = capitalizeFirstLetter(todo);
            if(todoCapitalized !== '' && !todoList.find(item => item.todoText === todoCapitalized)){
                todoList.push({
                                todoText: todoCapitalized,
                                completed: false
                            });
            }
        }

        for(const item of todoArray){
            addNewTodo(item);
        }

        return res.redirect(req.originalUrl);
    },
    remove: (req, res)=>{
        const todoToRemove = req.params.value;
        todoList = todoList.filter(item => item.todoText !== todoToRemove);
        
        return res.redirect('/');
    },
    update: (req, res)=>{
        const todoToModify = req.params.value;
        const todoFound = todoList.find(item => item.todoText === todoToModify);

        todoFound.completed = !todoFound.completed;
        return res.redirect('/');
    }
}

module.exports = controller;