const { Router } = require('express')

const router = new Router()
const {Post} = require('./models/models')
const PostController = require('./controllers/postController')

router.get('/posts', async (req, res) => {
    try {
        const users = await Post.findAll();        
        await res.json(users)            
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/posts', PostController.create);

router.get('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;        
        const one = await Post.findOne({where : {id}})  
        if(one === null){
            console.log(`Seraching id=${id} is not found`) 
            throw new Error("Username is not valid.")            
        }
        return await res.json(one)      
    } catch (error) {
        res.status(500).json(error)        
    }

})
router.put('/posts')
router.delete('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const del = await Post.destroy({where : {id}})     
        await res.json(del)       
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;