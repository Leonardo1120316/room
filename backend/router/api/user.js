const express = require("express");
const router = express.Router();
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql')
const models = initModels(sequelize);
const bcrypt = require('bcrypt')

router.post("/login", async (req, res) => {
    await models.user.findOne({ where: { userAccount: req.body.userAccount } }).then(async user => {
        if (user) {
            bcrypt.compare(req.body.userPassword, user.userPassword)
                .then(isMatch => {
                    if (isMatch) {
                        return res.status(200).json({code:"200",data:{id: user.dataValues.id}})
                    }else{
                        return res.status(400).json({ msg: "密码错误" })
                    }
                });
        } else {
            return res.status(400).json({ msg: "用户不存在" })
        }

    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

router.post('/register', async (req, res) => {
    models.user.findOne({ where: { userAccount: req.body.userAccount } }).then(async user => {
        if (user) {
            return res.status(400).json({ msg: "account has been register" })
        } else {
            await bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.userPassword, salt,async function (err, hash) {
                    const newUser = models.user.build({
                        userAccount: req.body.userAccount,
                        userPassword: hash,
                        email: req.body.email,
                        phone: req.body.phone,
                    })
                    await newUser.save();
                });
            });
            return res.status(200).json({ msg: "account register" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

router.get('/userinfo', async (req,res) => {
    models.user.findOne({where: {id: req.query.id}}).then(user => {
        const safeUser = {
            userAvatar: user.userAvatar,
            username: user.username,
            userAccount: user.userAccount,
            phone: user.phone,
            email: user.email,
            integral: user.integral,
            introduce: user.introduce
        }
        return res.status(200).json({user: safeUser})   
    }).catch((err)=>{
        return res.status(400).json({msg: "currentUser failed"})   
    })
})

module.exports = router;