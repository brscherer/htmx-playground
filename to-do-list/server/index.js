const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let todos = [
  {
    id: 1,
    text: "initial todo"
  }
];

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  if (!req.body.todo) {
    res.status(400).json({ success: false, message: 'Type a to-do' });
    return;
  }
  
  const todo = { id: todos.length + 1, text: req.body.todo };
  todos.push(todo);
  res.render("todo-item", { todos });
});

app.get('/todos', (req, res) => {
  res.render("todo-item", { todos });
});

app.get('/clear', (req, res) => {
  todos = []
  res.render("todo-item", { todos });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
