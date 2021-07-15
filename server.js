const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db.json');
const { v1: uuidv1 } = require('uuid');
//const { notes } = require('./data/notes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get('/notes', (req, res ) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
app.get('/api/notes', (req, res) => {
    res.json(db);
  });
  
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body
  const newNote = {
    title, 
    text,
    id: uuidv1()
  }
    db.push(newNote);
    fs.writeFile(path.join(__dirname, './db.json'), JSON.stringify(db), (err) => {
      console.log(err);
      })
  res.json(newNote)
});
  
app.listen(PORT, () => {
    console.log(`now on port ${PORT}`)
  });
  