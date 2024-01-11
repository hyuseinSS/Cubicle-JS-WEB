const Cube = require("../models/Cube")
const mongoose = require("mongoose")


exports.getOne = async (id) => {
    return await Cube.findById(id).populate('accessories').lean()
}

exports.getAll = async (name = "", from = "", to = "") => {
    const cubes = await Cube.find(
        { name: { $regex: new RegExp(name, "i") } })
        .where('difficultyLevel').lte(to).gte(from)
        .lean()
    return cubes;
}

exports.createCube = async (cube) => await Cube.create(cube);