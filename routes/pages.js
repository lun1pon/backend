const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controllers/auth.js");
const { checkAuth } = require('../middlewares/auth.js')
const { checkCookiesJWT } = require('../middlewares/users.js')
pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
module.exports = pagesRouter;