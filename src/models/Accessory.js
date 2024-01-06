const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
    type: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imageUrl.startsWith('http');
            },
            message: 'Image URL is not Valid!'
        }
    },
    description: {
        required: true,
        type: String,
        maxLength: 120,
    },
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cube',
        }
    ]

});

const Accessory = mongoose.model('Accessory', accessorySchema)

module.exports = Accessory;
