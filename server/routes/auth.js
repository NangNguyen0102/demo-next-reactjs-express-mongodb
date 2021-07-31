const router = require("express").Router();

const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController");

router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);

router.route("/auth/logout").get(logout);

module.exports = router;
