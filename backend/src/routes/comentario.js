const express = require('express');
const router = express.Router();

//Controller
const { create,
        read, 
        update, 
        remove,
        objectById } = require('../controllers/comentarioController');

router.post('/', create);

router.get('/', read);

router.put('/', update);

router.delete('/', remove);

router.param('', objectById);


module.exports = router;