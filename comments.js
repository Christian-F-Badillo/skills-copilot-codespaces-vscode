// Create web server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Create static server
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Create comment array
const comments = [
  {
    name: 'Bob',
    comment: 'This is a comment',
    date: '10/10/2018',
  },
  {
    name: 'Alice',
    comment: 'This is another comment',
    date: '11/10/2018',
  },
];

// Send comment array
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Add comment to array
app.post('/api/comments', (req, res) => {
  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    date: new Date().toLocaleDateString(),
  };
  comments.push(newComment);
  res.json(comments);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});