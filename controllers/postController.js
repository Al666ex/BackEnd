const {Post} = require('../models/models.js')

class PostController{
    async create(req, res) {
        console.log(req.body)
        try {
            const {author, title, content, picture} = req.body;
            const post = await Post.create({author, title, content, picture})            
            await res.json(post);            
        } catch (error) {
            console.log(error)
            res.status(500).json(error)        
        }
    };    
}

module.exports = new PostController();