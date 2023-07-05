const UserCRUDService = require("../services/user-crud.service");
const RequestValidator = require("../controllers/validators/user-request.validator")

// GET API to get all users
exports.getAllUsersController = async function (req, res) {

    const usersObj = await UserCRUDService.getAllUsers();

    try{
        if (!usersObj || usersObj.length === 0) {
            return res.status(404).json({ success: false, data: usersObj, message: "No users found." });
        }
    }
    catch(err){
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ message: "Users retrieved.", success: true, users :usersObj });
}

// GET API to get a specific user
exports.getUserByNameController = async function (req, res) {

    const userName = req.params['id'];
    try{
        const user = await UserCRUDService.getUserByName(userName);

        if (user) {
            const userObj = {
                email: user.email,
                firstName: user.firstName,
                id: user.id
            }
            return res.status(200).json({ success: true, user: userObj});
        } else {
            return res.status(404).json({ success: false, data: "No user found with provided name." });
        }

    }
    catch(err){
        return res.status(500).json({ message: "Internal server error" });
    }

}

// PUT API to update a current user
exports.updateUserController = async function (req, res) {

    const userName = req.params['id'];
    const isNewUserRequestBodyValid = RequestValidator.validateNewUserRequestBody(req.body);

    if (!isNewUserRequestBodyValid) {
        return res.status(400).json({ success: false, data: "Incorrect Request" });
    }

    const user = await UserCRUDService.getUserByName(userName);

    if (!user) {
        return res.status(404).json({ success: false, message: "No user found with provided name." });
    }

    const editedUser = {id: userName, firstName: req.body['firstName'], email: req.body['email'] };

    const savedUserId = await UserCRUDService.updateUser(editedUser);

    if (savedUserId === undefined || savedUserId === null) {
        return res.status(500).json({ message: "Error saving user. Something went wrong." });
    }

    return res.status(200).json({ message: `User updated`, success: true });
}

// POST API to add a new user
exports.createNewUserController = async function (req, res) {

    const isNewUserRequestBodyValid = RequestValidator.validateNewUserRequestBody(req.body);

    try{
        if (!isNewUserRequestBodyValid) {
            return res.status(400).json({ success: false, data: "Incorrect Request"});
        }
    }
    catch(err){
        return res.status(500).json({ message: "Internal server error" });
    }


    const newUser = { firstName: req.body['firstName'], email: req.body['email'] };

    const savedUserId = await UserCRUDService.saveUser(newUser);

    if (savedUserId === undefined || savedUserId === null) {
        return res.status(500).json({ message: "Error saving user. Something went wrong." });
    }

    return res.status(200).json({ message: "User added", success: true, id: savedUserId });
}


