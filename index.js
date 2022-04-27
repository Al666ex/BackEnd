const express = require("express")
require('dotenv').config()

const sequelize = require('./db')
const {Post} = require('./models/models')

const app = express();

app.use(express.json())

app.post('/', async (req, res) => {
//    console.log(req.body)
    try {
        const {author, title, content, picture} = req.body;
        const post = await Post.create({author, title, content, picture})
        await res.json(post);            
    } catch (error) {
        res.status(500).json(error)        
    }
})

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
