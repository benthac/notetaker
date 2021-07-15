const express = require('express');
const fs = require('fs');
const path = require('path');
//const { notes } = require('./data/notes');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/notes', (req, res ) => {
    res.sendFile(path.join(__dirname, './data/notes.html'));
  });

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname, './data/index.html'));
  });
  
app.get('/api/notes', (req, res) => {
  
  });
  
app.post('/api/notes', (req, res) => {});
  
app.listen(PORT, () => {
    console.log(`now on port ${PORT}`)
  });
  