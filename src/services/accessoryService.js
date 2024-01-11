const mongose = require('mongoose');
const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');


exports.getAll = () => Accessory.find().lean();
exports.getCubesAttachedAccessories = (ids) => Accessory.find({ _id: { $nin: ids } })




exports.create = (accessory) => Accessory.create(accessory);

exports.attachAccessory = async (cubeId, accessoryId) => {

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    if (!cube || !accessory) {
        return;
    }
    cube.accessories.push(accessory)
    accessory.cubes.push(cube)

    await accessory.save()
    await cube.save()
}

exports.getOneAccessory = async (id) => await Accessory.findById(id);

// exports.deleteOneAccessory = async (cubeId, accessoryId) => {

//     const cube = await Cube.findById(cubeId);
//     const accessory = await Accessory.findById(accessoryId);

//     console.log(cube, accessory);
// }