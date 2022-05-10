
const {Post} = require('../models/models');
const Services = require('../services/services')

class Controlers{
    async destroy(req,res){        
        try {            
            const deleteOne = await Services.destroy(req.params.id)               
            return await res.json(deleteOne)         
        } catch (error) {
            res.status(500).json(error.message)            
        }
    }

    async getAll(req, res){
        try {
            const all = await Services.getAll();
            return await res.json(all)                
        } catch (error) {
            res.status(500).json(error.message)
        }
    } 
    
    async getOne (req, res){
        try {  
            if(!req.params.id){
                res.status(400).json({message : "ID is not found"})
            }                       
            const one = await Services.getOne(req.params.id)
            return await res.json(one)      
        } catch (error) {
            res.status(500).json(error.message)        
        }
    
    }     

    async create(req, res) {        
        try {            
            const post = await Services.create(req.body, req.files.picture)            
            return await res.json(post);            
        } catch (error) {            
            res.status(500).json(error.message)        
        }
    };      

    async updateRecord(req, res){
        try {
            const findSearchId = await Services.updateRecord(req.body)
            return await res.json(findSearchId)                           
        } catch (error) {
            res.status(500).json(error.message)
        }

    }      


}

module.exports = new Controlers()