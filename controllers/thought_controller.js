const { Thought, User } = require('../models');

// /api/thoughts
const thoughtController = {
    //add thought to user
    getAllThoughts(req, res) {
        Thought.find({})
    }
}