
const {Post} = require('../models/models')
const FileService = require('./fileService')

class Services{
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const newPost = await Post.create({...post, picture : fileName})            
        return await newPost;            
    }; 
    
    async getOne (id){
        if(!id){
            throw new Error('ID не указан');
        }  
        const getById = await Post.findOne({where : {id}})  
        return getById
    }   
    
    async getAll(){
        const all = await Post.findAll();
        return all;
    }
    
    async destroy(id){
        if(!id){
            throw new Error('ID не указан');
        }
        const deleteOne = await Post.destroy({where : {id}})   
        return deleteOne;
    }    

    async updateRecord(body){ 
        const {id, content} = body;        
        if(!id){
            throw new Error('ID не указан');
        }

        const findSearchId = await Post.findOne({where : {id}})
        const upd = await Post.update(                
            {content : content},
            {where : {id : id} }
        );
        return upd;
    }      

}

module.exports = new Services();