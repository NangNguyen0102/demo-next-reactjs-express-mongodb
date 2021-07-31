const router = require("express").Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  logout,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/password/forgot").post(forgotPassword);
router.route("/auth/password/reset/:token").put(resetPassword);
router.route("/auth/logout").get(logout);

router.route("/user/me").get(isAuthenticatedUser, getUserProfile);

module.exports = router;
