const path = require('path');
const express = require('express')
const app = express()
const port = 3001

// View Engine Setup 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/redirect', (req, res) => {
  res.sendFile(path.join(__dirname, 'redirect.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})