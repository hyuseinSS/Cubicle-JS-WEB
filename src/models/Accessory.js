// ⦁	Id - (ObjectId)
// ⦁	Name - (String, required)
// ⦁	ImageUrl - (String, required, http/https validation)
// ⦁	Description - (String, required, max length validation)
// ⦁	Cubes - (ObjectId, ref Cubes Model)
const mongoose = require("mongoose");


const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.startsWith('http');
            },
            message: 'Image URL is not Valid!'
        }
    },
    description: {
        type: String,
        maxLength: 120,
    },
    cubes: [

    ]

})