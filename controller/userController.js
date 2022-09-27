// Add Useing 
const User = require('../model/User');
const bcrypt = require('bcrypt');
// ****************************************************************************

// Start Code 


addNewUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  User.findOne(user.username).exec((err, user) => {
    if (user) {
      console.log("user already exists");
      return res.status(400).json({
        error: "user already exists"
      });
    }
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (err) {
    res.status(404).send(err.message);
  }
};


getNewUser = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

deleteUser = async (req, res) => {
  User.deleteOne({_id : req.params.deleteuserID}).then(doc => {
    res.status(200).json({
      message: doc
    });
  }).catch(err => {
    res.status(404).send(err.message);
  })
}


module.exports = {
  addNewUser,
  getNewUser,
  deleteUser
};