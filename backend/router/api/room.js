const express = require("express");
const router = express.Router();
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql')
const models = initModels(sequelize);

router.get('/roomlist', async (req, res) => {
    await models.room.findAll({}).then(async room => {
        if (room) {
            return res.status(200).json({ list: room })
        } else {
            return res.status(400).json({ msg: "教室不存在" })
        }

    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})
router.post('/updateroom', async (req, res) => {
    models.room.update(req.body,{ where: { id: req.body.id } }).then(async item => {
        return res.status(200).json({msg:'success'})
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})
module.exports = router;