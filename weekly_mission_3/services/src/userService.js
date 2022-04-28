const User = require("./user.js")
module.exports = class UserService {
    static create(id, username, name) {
        return new User(id, username, name, `Hi! I'm ${name}.`)
    }

    static getInfo(user) {
        return JSON.stringify(user)
    }

    static updateUserUsername(user, username) {
        user.setUsername(username)
    }

    static getAllUsernames(users) {
        return users.map(user => user.getUsername())
    }
}