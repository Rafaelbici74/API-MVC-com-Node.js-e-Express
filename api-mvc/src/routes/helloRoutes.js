const router = require("express").Router();
const helloController = require("../controllers/helloController");

// GET http://localhost:3000/status
router.get("/", helloController.listar);

module.exports = router;