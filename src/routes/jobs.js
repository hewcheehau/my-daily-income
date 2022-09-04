
const express = require("express")
const router = express.Router()
const verify = require("../helper/authVerify")

router.post("/testToken", verify.verifyToken, async (req, res) => {
    try {
        res.send({"message": "success verify"})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
})

module.exports = router;