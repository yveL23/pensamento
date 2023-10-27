const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
router.get("/thoughts-create", ThoughtsController.registerThought);
router.post("/thoughts/create", ThoughtsController.createThought);
router.get("/thoughts", ThoughtsController.findAllThoughts);
router.get("/thoughts/:id", ThoughtsController.findThoughts);
router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);
router.get("thoughts/edit", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

module.exports = router;