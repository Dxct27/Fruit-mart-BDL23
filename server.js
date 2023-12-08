const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {
    createFruit,
    getAllFruites,
    getFruitById,
    updateFruitById,
    deleteFruitById,
  } = require('./controllers/fruit_controllers');
  
const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/fruit_api')

/* Testing 
app.get('/', (req, res) => {
  res.json({message : 'Hello World!'})
});
*/

// CRUD Operations
// Create a new fruit
app.post('/fruit/create', createFruit);

// Get all fruit
app.get('/fruit/show', getAllFruites);

// Get a fruit by ID
app.get('/fruit/:id', getFruitById);

// Update a fruit by ID
app.put('/fruit/update/:id', updateFruitById);

// Delete a fruit by ID
app.delete('/fruit/delete/:id', deleteFruitById);

//Start server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
