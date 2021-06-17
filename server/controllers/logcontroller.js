const Express = require("express")
const router = Express.Router()

/*
================================
let's user create workout log
================================
*/
router.post("/", (req, res) => {
    res.send("Will create workout log for user")
} )

/*
=================================
gets all logs for indiv. users
=================================
*/
router.get("/", (req, res) => {
    res.send('Will get all logs for indiv users!')
} )

/*
================================
gets individual logs by id
================================
*/
// router.get("/:id", (req, res) => {
//     res.send("Will get individual logs by id")
// } )

/*
===================================
indiv logs to be updated by a user
===================================
*/
// router.put("/", (req, res) => {} )

/*
================================
indiv logs to be deleted by a user
================================
*/
// router.delete("/", (req, res) => {} )
module.exports = router