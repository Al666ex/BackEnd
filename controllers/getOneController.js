const {Post} = require('../models/models.js');

class GetOneController{
    async getOne (req, res){
        try {
            const {id} = req.params;   
            const one = await Post.findOne({where : {id}})  
            if(one === null){
                console.log(`Seraching id=${id} is not found`)                 
            }
            return await res.json(one)      
        } catch (error) {
            res.status(500).json(error)        
        }
    
    }    
    
}

module.exports = new GetOneController()