const cubes = require("../db.json");
const fs = require("fs/promises");


exports.save = (cube) => {
    cube.id = cubes[cubes.length - 1].id + 1
    cubes.push(cube)
    let data = JSON.stringify(cubes, "", 4)
    return fs.writeFile('src/db.json', data, { encoding: "utf-8" })
}

exports.getOne = (id) => {
    return cubes.filter(cube => cube.id == id)
}

exports.deleteOne = (id) => {
    const index = cubes.findIndex(x => x.id == id)
    cubes.splice(index, 1)
    let data = JSON.stringify(cubes, "", 4)
    return fs.writeFile('src/db.json', data, { encoding: "utf-8" })
}

exports.getAll = (name = "", from = "", to = "") => {
    name = name.toLowerCase()
    const result = cubes
        .filter(cube => cube.name.toLowerCase().includes(name))
        .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to)
    return result;
}