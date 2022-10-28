const express = require('express');
const routes = require('./routes/index.routes');
const path = require('path');
const cons = require('consolidate');

const PORT = 5000;
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(routes);

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.listen(PORT, ()=>{
    console.log(`Running at port ${PORT}...`);
})