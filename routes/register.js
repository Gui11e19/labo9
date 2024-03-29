var express = require('express');
var router = express.Router();
const registerController = require("./../controllers/RegisterControllers");

router.get("/", registerController.getRegister);
router.post("/:id", registerController.getOneRegister);
router.post("/", registerController.insert);
module.exports = router;
