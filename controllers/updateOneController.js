const {Post} = require('../models/models')

class UpdateOneController{
    async updateRecord(req, res){
        try {
            const {content} = req.body
            const {id} = req.params
            
            if(!id){
                res.status(400).json({message : "ID is not found"})
            }
    
            const findSearchId = await Post.findOne({where : {id}})
            const upd = await Post.update(                
                {content : content},
                {where : {id : id} }
            );

            return await res.json(upd)           
                
        } catch (error) {
            res.status(500).json({message : `Error server central ${error}`})
        }

    }   

}

module.exports = new UpdateOneController()

