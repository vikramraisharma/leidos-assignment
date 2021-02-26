const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express()
const PORT = 8080
var data = './data/sampleData.json'

let raw = fs.readFileSync(data)
let dogs = JSON.parse(raw);

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send(dogs)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})