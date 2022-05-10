const {Post} = require('../models/models')

class DeleteOneController{
    async destroy(req,res){        
        try {
            const {id} = req.params
            const deleteOne = await Post.destroy({where : {id}})   
            
            return await res.json(deleteOne)         
        } catch (error) {
            return await res.status(500).json(error)            
        }
    }
}

module.exports = new DeleteOneController();