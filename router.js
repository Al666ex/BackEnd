const { Router } = require('express')

const router = new Router()
const {Post} = require('./models/models')

router.get('/posts', async (req, res) => {
    try {
        const users = await Post.findAll();        
        await res.json(users)            
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/posts', async (req, res) => {
        console.log(req.body)
        try {
            const {author, title, content, picture} = req.body;
            const post = await Post.create({author, title, content, picture})            
            await res.json(post);            
        } catch (error) {
            console.log(error)
            res.status(500).json(error)        
        }
    });

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