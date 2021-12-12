const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('api/thoughts')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);
    
router
    .route('/api/thoughts/:thoughtId/reactions')

module.exports = router;    