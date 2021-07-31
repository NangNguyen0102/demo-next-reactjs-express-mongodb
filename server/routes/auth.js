const router = require("express").Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  logout,
} = require("../controllers/authController");

router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/password/forgot").post(forgotPassword);
router.route("/auth/logout").get(logout);

module.exports = router;
