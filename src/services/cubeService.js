const Cube = require("../models/Cube")


exports.getOne = async (id) => {
    return await Cube.findById(id).lean()
}

exports.getAll = async (name = "", from = "", to = "") => {
    const result = await Cube.find().lean()
    return result;
}