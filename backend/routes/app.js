const router = require("express").Router();
const {
  addNewDriver,
  addNewUser,
  findEmail,
} = require("../controllers/userControllers");
router.post("/addNewDriver", addNewDriver);
router.post("/addNewUser", addNewUser);
router.post("/findEmail", findEmail);
module.exports = router;
