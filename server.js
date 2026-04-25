const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.send("Task added");
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter((t, i) => i != req.params.id);
    res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));