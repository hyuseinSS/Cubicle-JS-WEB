const mongoose = require("mongoose");


const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 120,
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: {
        //     validator: function (value) {
        //         return value.startsWith("http");
        //     },
        //     message: "Image URL is not valid!"
        // }
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 6,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


// cubeSchema.path('imageUrl').validate(function () {
//     return this.imageUrl.startsWith('http')
// }, 'Invalid URL!')

const Cube = mongoose.model('Cube', cubeSchema);


module.exports = Cube;
