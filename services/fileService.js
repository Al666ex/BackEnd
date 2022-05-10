const {v4} = require('uuid');
const path = require('path');

class FileService{
    saveFile(file){
        try {
            const fileName = v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName                
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new FileService()