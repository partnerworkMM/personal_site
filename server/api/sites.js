const express = require('express')
const {getSitesByCreator} = require("../db")

const sitesRouter = express.Router()

sitesRouter.get('/:creator', async (req, res, next) =>{
    try {
        const {creator} = req.params
        const sites = await getSitesByCreator(creator)
        res.send(sites)
    } catch (error) {
        throw error
    }
})

module.exports = sitesRouter