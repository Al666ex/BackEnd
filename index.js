const express = require("express")
require('dotenv').config()

const sequelize = require('./db')
const {Post} = require('./models/models')
const router = require('./router.js')

const app = express();

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
