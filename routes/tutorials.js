const express = require('express')
const router = express.Router()

router.get("/" , (req ,res) => {
    res.render('./tutorials/main')
})

module.exports = router
