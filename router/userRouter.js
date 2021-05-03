const router = require('express').Router();
const User = require('../models/userModel');
const createError=require('http-errors');

router.get('/', async (req, res) => {
    const getAllUsers = await User.find({});
    res.json(getAllUsers);
});

/* 
router.get('/:id', (req, res) => {
    res.json({ mesaj: "id'si:" + req.params.id + " user lıstelenecek" });
});
 */

router.post('/', async (req, res,next) => {
    try {
        const createUser = new User(req.body);
        const result = await createUser.save();
        res.json(result);

    } catch (err) {
       next(err);
        // console.log("kayıt olurken hata oluştu " + err);
    }

});


router.patch('/:id', async (req, res,next) => {
    try {
        const result = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json({
                mesaj: "Kullanıcı bulunamadı"
            })
        }

    } catch (err) {
        next(createError(400,err))
        //console.log("Güncelleme yaparken hata oluştu " + err);
    }


});


router.delete('/:id', async (req, res,next) => {
    try {
        const result = await User.findByIdAndDelete({ _id: req.params.id });
        if (result) {
            return res.json({
                mesaj: "Kullanıcı silindi"
            })
        } else {        
            //throw createError(404,'kullanıcı bulunamadı')
            
            return res.status(404).json({
                mesaj: "Kullanıcı bulunamadı"

            })
        }

    } catch (err) {
       // console.log("Kullanıcı silerkan hata oluştu " + err);
       next(createError(400,err));
    }

});

module.exports = router;