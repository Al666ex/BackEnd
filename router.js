const { Router } = require('express')

const router = new Router()

const PostController = require('./controllers/postController')
const GetOneController = require('./controllers/getOneController')
const GetAllController = require('./controllers/getAllController')
const DeleteOneController = require('./controllers/deleteController')

const UpdateOneController = require('./controllers/updateOneController')

router.get('/posts',GetAllController.getAll);
router.post('/posts', PostController.create);
router.get('/posts/:id', GetOneController.getOne);
router.put('/posts/:id', UpdateOneController.updateRecord)
//router.put('/posts/:id', UpdateController.updRecord)
router.delete('/posts/:id', DeleteOneController.destroy)

module.exports = router;