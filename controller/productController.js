// Start Use 
const ProductDB = require('../model/product');

// New function get Products 
getProducts = async (req, res) => {
    try {
        const product = await ProductDB.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }

};


// New function add Products 
addProducts = async (req, res) => {
    const product = new ProductDB({
        imagePath: req.body.imagePath,
        nameProduct: req.body.nameProduct,
        information: req.body.information,
        price: req.body.price
    });
    try {
        const saveProduct = await product.save();
        res.send(saveProduct);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

/*
findProducts = (req, res) => {
    product.find({}, (err, doc) => {
        if (err) {
            console.log(err);
        }
        let productGrid = [];
        let cloGrid = 4;
        for (var i = 0; i < doc.length; i +=cloGrid) {
            productGrid.push(doc.slice(i, i +cloGrid));
        }
        res.status(200).json(productGrid);
    });

        try {
        const product = await ProductDB.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }


};
*/

module.exports = {
    addProducts,
    getProducts
};