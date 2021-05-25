"use strict";
var express_1 = require("express");
var UserRoutes = require("../User/Infrastructure/UserRoutes");
var router = express_1.Router();
router.use('/users', UserRoutes);
module.exports = router;
