var express = require('express');
var router = express.Router();
const userControl = require('../controller/userController');



/* GET users listing. */

router.post('/register', userControl.addNewUser);
router.get('/getuser', userControl.getNewUser);
router.delete('/:deleteuser', userControl.deleteUser);




module.exports = router;