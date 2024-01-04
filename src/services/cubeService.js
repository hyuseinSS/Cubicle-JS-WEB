const fs = require("fs/promises");
const Cube = require("../models/Cube")


exports.getOne = async (id) => {
    return await Cube.findOne({ _id: id }).lean()
}

exports.getAll = async (name = "", from = "", to = "") => {
    const result = await Cube.find().lean()
    return result;
}

// exports.like = (id) => {
//     const cube = cubes.filter(cube => cube.id == id)[0];
//     const index = cubes.findIndex(x => x.id == id)

//     if (cube.likes == "Liked! :)") {
//         return;
//     }
//     cube.likes = "Liked! :)"

//     cubes.splice(index, 1, cube)

//     let data = JSON.stringify(cubes, "", 4)
//     return fs.writeFile('src/db.json', data, { encoding: "utf-8" })
// }