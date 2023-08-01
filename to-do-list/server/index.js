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

app.use(cors());
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  console.log(req.body)
  
  // if (!req.body.todo) {
  //   res.status(400).json({ success: false, message: 'Type a to-do' });
  //   return;
  // }
  
  // const todoText = req.body.todo;
  const todo = { id: todos.length + 1, text: "hard-coded todo" };
  todos.push(todo);
  res.json({ success: true, message: 'To-do added' });
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
