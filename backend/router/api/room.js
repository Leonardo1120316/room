const express = require("express");
const router = express.Router();
const sq = require("sequelize")
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql')
const { Op } = sq;
const models = initModels(sequelize);

router.get('/roomlist', async (req, res) => {
    if(req.query.roomLocation || req.query.roomNumber || req.query.roomType){
        console.log(req.body)
    }else{
        await models.room.findAll({}).then(async room => {
            if (room) {
                return res.status(200).json({ list: room })
            } else {
                return res.status(400).json({ msg: "教室不存在" })
            }
    
        }).catch((error) => {
            return res.status(400).json({ error: error })
        })
    }
})
router.post('/updateroom', async (req, res) => {
    models.room.update(req.body,{ where: { id: req.body.id } }).then(async item => {
        return res.status(200).json({msg:'success'})
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})
router.post('/searchroomlist', async (req, res) => {
        await models.room.findAll({where: {[Op.or]: [{roomNumber: req.body.roomNumber},{roomLocation: req.body.roomLocation},{roomType:req.body.roomType}]}}).then(async room => {
            if (room) {
                return res.status(200).json({ list: room })
            } else {
                return res.status(400).json({ msg: "教室不存在" })
            }
    
        }).catch((error) => {
            return res.status(400).json({ error: error })
        })
})
//delete
router.get('/deleteroom', async (req, res) => {
    console.log(req.body)
    models.room.destroy({ where: { id: req.query.id } }).then(async room => {
        if (!room) {
            return res.status(400).json({ msg: "no record" })
        } else {
             
            return res.status(200).json({ msg: "record delete" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})
//add
router.post('/addroom', async (req, res) => {
    console.log(req.body)
    const newRoom = models.room.build({
        roomNumber: req.body.roomNumber,
        roomLocation: req.body.roomLocation,
        roomType: req.body.roomType,
        roomSeat: req.body.roomSeat,
        row: req.body.row,
        column: req.body.column,
        max: req.body.max
    })
    await newRoom.save()
    return res.status(200).json({ msg: "room add" })
})
module.exports = router;