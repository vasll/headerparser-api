const express = require('express');
const router = express.Router();

router.get("/whoami", (res, req) => {
    req.json({})
})

module.exports = router