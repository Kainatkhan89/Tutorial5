const UserDataStoreRepository= require("../persistence/repositories/users.repository");

exports.getAllUsers = async function () {
    return UserDataStoreRepository.getAllUsersFromDataStore();
}

exports.getUserByName = async function (userName) {
    return UserDataStoreRepository.getUserByNameFromDataStore(userName);
}

exports.saveUser = async function (user) {
    return UserDataStoreRepository.saveUserToDataStore(user);
}

exports.updateUser = async function (user) {
    return UserDataStoreRepository.updateUserToDataStore(user);
}

