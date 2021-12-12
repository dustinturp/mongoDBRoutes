const router = require('express').Router();

const {
getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser 
} = require('../../controllers/user_controller')

// /api/pizzas
router
    .route('/api/users')
    .get(getAllUsers)
    .post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/api/users/:userId/friends/:friendId')

module.exports = router;