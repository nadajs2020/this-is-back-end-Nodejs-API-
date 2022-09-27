const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    nameProduct: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productsSchema);