const { DataTypes } = require("sequelize")
const db = require("../db")

const WOL = db.define("log", {
    exercise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caloriesBurned: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    }
})

module.exports = WOL