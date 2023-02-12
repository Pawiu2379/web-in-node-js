const express = require('express')
const router = express.Router()

router.get("/" , (req ,res) => {
    res.send('panel')
})

module.exports = router
