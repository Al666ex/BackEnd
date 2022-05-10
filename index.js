const express = require("express")
require('dotenv').config()

const sequelize = require('./db')
const router = require('./router.js')
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.static('static'))
app.use(fileUpload({}));
app.use(express.json())
app.use('/api',router)

async function startApp(){
    try{        
        await sequelize.authenticate()
        await sequelize.sync()        
        app.listen(process.env.PORT, () => console.log(`SERVER started at port : ${process.env.PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

startApp();
