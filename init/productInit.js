const myProducts = require("../model/product");
const mongoose = require('mongoose');
// Start DB connection
mongoose.connect(
    "mongodb://localhost/shopping-mn", {
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DB connection established....");
      }
    }
  );

const products = [
    new myProducts({
        imagePath: "../public/images/images/5.webp",
        productName: "product 1",
        information: "Some make up the bulk of the card my mahmoud",
        price: 290,
    }),
    new myProducts({
        imagePath: "../public/images/images/6.webp",
        productName: "product 2",
        information: "Some make up the bulk of the card my nada",
        price: 40,
    }),
    new myProducts({
        imagePath: "../public/images/images/7.webp",
        productName: "product 3",
        information: "Some make up the bulk of the card my ahmed",
        price: 120,
    }),
    new myProducts({
        imagePath: "../public/images/images/8.webp",
        productName: "product 4",
        information: "Some make up the bulk of the card my ail",
        price: 150,
    }),
    new myProducts({
        imagePath: "../public/images/images/9.webp",
        productName: "product 5",
        information: "Some make up the bulk of the card my khaled",
        price: 280,
    }),
    new myProducts({
        imagePath: "../public/images/images/10.webp",
        productName: "product 6",
        information: "Some make up the bulk of the card my osame",
        price: 100,
    }),
];

var done = 0 ;

for (let i = 0; i < products.length; i++) {
    products[i].save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            done++ ;
            if (done === products.length) {
                mongoose.disconnect();
            }
        }
    });
};

