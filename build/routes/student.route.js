"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var student_controller_1 = require("../controllers/student.controller");
var router = express_1.default.Router();
router.post("/register", student_controller_1.registerStudent);
router.post("/login", student_controller_1.loginStudent);
router.post("/logout", student_controller_1.logoutStudent);
exports.default = router;
