const express = require("express");
const router = express.Router();

router.get("/calendar", (req, res) => res.json({ msg: "calendar works" }));
