const {Post} = require('../models/models');

class GetAllController{
    async getAll(req, res){
        try {
            const all = await Post.findAll();
            return res.json(all)                
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new GetAllController()