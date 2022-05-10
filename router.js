const { Router } = require('express')

const router = new Router()
const Controlers = require('./controllers/controllers')

router.get('/posts',Controlers.getAll);
router.post('/posts', Controlers.create);
router.get('/posts/:id', Controlers.getOne);
router.put('/posts/', Controlers.updateRecord)
router.delete('/posts/:id', Controlers.destroy)

module.exports = router;