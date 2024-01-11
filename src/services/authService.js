const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const secret = 'mysupersecretsecret'
const saltRounds = 10;

exports.register = async ({ username, password, repeatPassword }) => {
    if (password !== repeatPassword) {
        return;
    };

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = await User.create({
        username,
        password: hashedPassword,
    })
    return createdUser;
}

exports.login = async ({ username, password }) => {

    const user = await User.findOne({ username: username });

    if (!user) {
        return;
    }

    isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return;
    }
    let result = await new Promise((resolve, reject) => {
        jwt.sign({ _id: user._id, username: user.username }, secret, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });

    return result;
};
