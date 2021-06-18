const Express = require("express")
const router = Express.Router()
let validateJWT = require("../middleware/validate-jwt")
const { LogModel } = require("../models")
/*
================================
let's user create workout log
================================
*/
router.post("/", validateJWT, async (req, res) => {
    const { exercise, duration, caloriesBurned } = req.body.log
    const { id } = req.user
    const logEntry = {
        exercise,
        duration,
        caloriesBurned,
        owner: id
    }
    try{
        const newLog = await LogModel.create(logEntry)
        res.status(200).json(newLog)
    } catch (err) {
        res.status(500).json({ error: err })
    }
    LogModel.create(logEntry)
})

/*
=================================
gets all logs for indiv. users
=================================
*/
router.get("/", async (req, res) => {
    try{
        const entries = await LogModel.findAll()
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

/*
================================
gets individual logs by id
================================
*/
router.get("/:id", validateJWT, async (req, res) => {
    const { id } = req.params
    try{
        const userLogs = await LogModel.findAll({
            where: {
                id: id
            }
        })
        res.status(200).json(userLogs)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

/*
===================================
indiv logs to be updated by a user
===================================
*/
router.put("/:id", validateJWT, async (req, res) => {
    const { exercise, duration, caloriesBurned } = req.body.log
    const logId = req.params.id
    const userId = req.user.id

    const query = {
        where: {
            id: logId,
            owner: userId
        }
    }

    const updatedLog = {
        exercise: exercise,
        duration: duration,
        caloriesBurned: caloriesBurned
    }
    try {
        const update = await LogModel.update(updatedLog, query)
        res.status(200).json(update)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

/*
================================
indiv logs to be deleted by a user
================================
*/
router.delete("/:id", validateJWT, async (req, res) => {
    const logId = req.params.id
    const userId = req.user.id

    try {
        const query = {
            where: {
                id: logId,
                owner: userId
            }
        }

    await LogModel.destroy(query)
    res.status(200).json({message: "Log Entry Removed"})
} catch (err) {
    res.status(500).json({ error: err })
}
})
module.exports = router