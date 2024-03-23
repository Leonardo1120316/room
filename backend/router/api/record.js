const express = require("express");
const router = express.Router();
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql');
const record = require("../../module/record");
const models = initModels(sequelize);

//search
router.get('/recordlist', async (req, res) => {
    await models.record.findAll({}).then(async record => {
        if (record) {
            return res.status(200).json({ list: record })
        } else {
            return res.status(400).json({ msg: "记录不存在" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})
//add
router.post('/addrecord', async (req, res) => {
    console.log(req.body)
    const newRecord = models.record.build({
        username: req.body.username,
        roomNumber: req.body.roomNumber,
        roomLocation: req.body.roomLocation
    })
    await newRecord.save()
    return res.status(200).json({ msg: "record add" })
})
//delete
router.get('/deleterecord', async (req, res) => {
    models.record.destroy({ where: { id: req.query.id } }).then(async record => {
        console.log(record)
        if (!record) {
            return res.status(400).json({ msg: "no record" })
        } else {
             
            return res.status(200).json({ msg: "record delete" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

module.exports = router;