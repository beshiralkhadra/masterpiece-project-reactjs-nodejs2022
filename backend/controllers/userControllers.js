const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Driver = require("../models/Driver");
const User = require("../models/User");
///////////////////////////////////////////////handle registration
const addNewDriver = (req, res) => {
  const { username, email, age, gender, phone, car_type } = req.body;
  Driver.create({
    username: username,
    email: email,
    age: age,
    gender: gender,
    phone: phone,
    car_type: car_type,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
const addNewUser = (req, res) => {
  const { username, email, age, gender, phone } = req.body;
  User.create({
    username: username,
    email: email,
    age: age,
    gender: gender,
    phone: phone,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
/////////////////////////////////////////////////////////////handle login
const findEmail = (req, res) => {
  const { email } = req.body;
  console.log(email);
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((resp) => {
      if (resp) {
        res.send(resp.dataValues);
      } else {
        res.send(false);
      }
    })
    .catch((err) => console.log(err));
};
module.exports = {
  addNewDriver,
  addNewUser,
  findEmail,
};
