const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Initialize the database
const db = new sqlite3.Database('./database.db');

// Create tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS task (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER,
      work TEXT,
      priority TEXT,
      due_date TEXT,
      user_email TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
});

// Fetch all tasks
app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM task', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { name, age, work, priority, due_date, user_email } = req.body;
  const stmt = db.prepare('INSERT INTO task (name, age, work, priority, due_date, user_email) VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run(name, age, work, priority, due_date, user_email, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { name, age, work, priority, due_date } = req.body;
  const stmt = db.prepare('UPDATE task SET name = ?, age = ?, work = ?, priority = ?, due_date = ? WHERE id = ?');
  stmt.run(name, age, work, priority, due_date, id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ changes: this.changes });
  });
  stmt.finalize();
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const stmt = db.prepare('DELETE FROM task WHERE id = ?');
  stmt.run(id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ changes: this.changes });
  });
  stmt.finalize();
});

// User management endpoints
app.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  const stmt = db.prepare('INSERT INTO user (username, email, password) VALUES (?, ?, ?)');
  stmt.run(username, email, password, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { username, email, password } = req.body;
  const stmt = db.prepare('UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?');
  stmt.run(username, email, password, id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ changes: this.changes });
  });
  stmt.finalize();
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const stmt = db.prepare('DELETE FROM user WHERE id = ?');
  stmt.run(id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ changes: this.changes });
  });
  stmt.finalize();
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(200).json({ message: 'Login successful!', user: row });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
