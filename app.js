const path = require('path');
const express = require('express')
const app = express()
const port = 3001

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/redirect', (req, res) => {
  res.sendFile(path.join(__dirname, 'redirect.html'));
})
app.get('/display-resource', (req, res) => {
  res.sendFile(path.join(__dirname, 'displayResource.html'));
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})