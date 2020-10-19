const { query } = require("express");
const Animal = require("../models/index.models");

module.exports = {
    findAll: (req, res) => {
        Animal.find()
            .then(animals => res.json(animals))
            .catch(err => res.json(err));
    },
    findOne: (req, res) => {
        Animal.findById(req.params.id)
            .then(animal => res.json(animal))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        Animal.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Animal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, context: "query"})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Animal.findByIdAndRemove(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
};