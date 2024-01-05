const mongose = require('mongoose');
const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');


exports.getAll = () => Accessory.find().lean();


exports.create = (accessory) => Accessory.create(accessory);

exports.attachAccessory = async (cubeId, accessoryId) => {

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory)
    accessory.cubes.push(cube)

    await cube.save()
    await accessory.save()

    return cube;
}