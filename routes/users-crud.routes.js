const UserCRUDController = require("../controllers/users.controller");
const express = require("express");

const UserCRUDRouter = express.Router();

UserCRUDRouter.get('/users', UserCRUDController.getAllUsersController);
UserCRUDRouter.get('/user/:id', UserCRUDController.getUserByNameController);
UserCRUDRouter.post('/add', UserCRUDController.createNewUserController);
UserCRUDRouter.put('/update/:id', UserCRUDController.updateUserController);
module.exports = UserCRUDRouter;
