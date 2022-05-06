const sequelize = require('../db')
const {Post} = require('../models/models');

class UpdateController{
    async updRecord(req, res){
        try {
            const {id} = req.params;                                    
            const post = await Post.findOne({where : {id}});
           
            const updated = await Post.update(
                {
                    content : "Mike my brother and friend forever"
                },
                {
                    where : {id : id}
                }
            );

            await res.json(updated);
            
        } catch (error) {
            res.status(500).json({message : `Server Error ${error}`});
        }
    }
    
}

module.exports = new UpdateController();