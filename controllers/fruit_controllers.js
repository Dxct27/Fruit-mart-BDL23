const Fruit = require('../models/fruit_models');

// CRUD
// Create
const createFruit = async (req, res) => {
    try {
        const fruit = new Fruit(req.body);
        await fruit.save();
        res.send({message: "Data added successfully"});
      } catch (error) {
        res.status(500).send(error);
      }
  };
  
// Get all fruit
const getAllFruites = async (req, res) => {
    try {
      const fruites = await Fruit.find();
      res.json(fruites);
    } catch (error) {
      res.status(500).send(error);
    }
  };

// Get fruit by ID
const getFruitById = async (req, res) => {
    try {
      const fruit = await Fruit.findById(req.params.id);
      if (!fruit) res.status(404).send('Fruit not found');
      res.json(fruit);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  
// Update fruit by ID
const updateFruitById = async (req, res) => {
    try {
      const fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
      if (!fruit) res.status(404).send('Fruite not found');
      res.json(fruit);

    } catch (error) {
      res.status(500).send(error);
    }
  };

// Delete fruit by ID
const deleteFruitById = async (req, res) => {
    try {
      const fruit = await Fruit.findByIdAndDelete(req.params.id);
      if (!fruit) res.status(404).send('Fruit not found');
      res.send({message: 'Fruit deleted successfully'});
    } catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = {
    createFruit,
    getAllFruites,
    getFruitById,
    updateFruitById,
    deleteFruitById,
  };