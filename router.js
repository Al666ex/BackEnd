const { Router } = require('express')

const router = new Router()
const {Post} = require('./models/models')
const PostController = require('./controllers/postController')
const GetOneController = require('./controllers/getOneController')
const GetAllController = require('./controllers/getAllController')
const DeleteOneController = require('./controllers/deleteController')

router.get('/posts',GetAllController.getAll);
router.post('/posts', PostController.create);
router.get('/posts/:id', GetOneController.getOne);

router.put('/posts')
router.delete('/posts/:id', DeleteOneController.destroy)

module.exports = router;