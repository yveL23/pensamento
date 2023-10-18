const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
router.post("/thoughts", ThoughtsController.createThought);
router.get("/thoughts", ThoughtsController.findAllThoughts);
router.get("/thoughts/:id", ThoughtsController.findThoughts);
router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);
router.put("/thought/:id", ThoughtsController.updateThought);

module.exports = router;
