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

    // name = name.toLowerCase()
    // const result = cubes
    //     .filter(cube => cube.name.toLowerCase().includes(name))
    //     .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to)


    return cubes;
}

exports.create = async (cube) => await Cube.create(cube);