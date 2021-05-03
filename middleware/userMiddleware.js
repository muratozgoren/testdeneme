const { json } = require("express");

const catcher = (err, req, res, next) => {

   /*  console.log(err);
    if (err.code === 11000) {
       return res.json({
            mesaj: Object.keys(err.keyValue)+" için girdiğiniz "+Object.values(err.keyValue)+" unique olmalıdır" ,
            errorCode: 400
        })
    }
    if(err.code===66){
        return res.json({
            mesaj: "Değiştirilemez bir alanı güncellemeye çalıştınız ",
            errorCode: 400
        })
    }

    res.status(err.statusCode || 500);
    res.json({
        errorCode: err.statusCode || 500,
        mesaj: err.message
    })
 */

   /*  res.json({
        mesaj: err
    }); */

    if(err.name==="CastError"){
        res.status(400).json({
            mesaj : "Geçerli bir id veriniz"
        })
    }else{
        res.json({
            mesaj : err
        })
    }

    if(err.name==="ValidationError"){
        res.status(404).json({
            mesaj:"geçersiz giriş yaptınız"
        })
    }else{
        res.json({
            mesaj : err
        })
    }

    if(err.name==="MongoError"){
        res.status(400).json({
            mesaj:"id güncellenemez"
        })
    }else{
        res.json({
            mesaj : err
        })
    }

}

module.exports = catcher;