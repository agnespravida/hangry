const { comparePassword } = require('../helpers/password.js');
const { createToken } = require('../helpers/token.js');
const {Users} = require('../models/index.js')

function Register(req, res, next) {
    const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    return Users.create(payload)
    .then((data) => {
        delete data.password;

        res.status(200).json({
          status: 200,
          message: "User Created",
        });
      })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        next({
          status: 400,
          message: 'Email already exists'
        })
      }
    })
}

async function Login(req, res, next) {
  const {email, password} = req.body;
  const user = await Users.findOne({ where: {email: email} })
  if (user) {
    if (comparePassword(password, user.password)) {
      res.status(200).json({
        status: 200,
        message: 'Login Success',
        token: createToken({
          id: user.id,
          email: user.email
        })
      })
    } else {
      next({
        status: 401,
        message: 'Invalid email or password'
      })
    }
  } else {
    next({
      status: 401,
      message: 'Invalid email or password'
    })
  }


}

module.exports = {Register, Login}