const express = require('express');
const router = express.Router();

//Controller
const { create,
        read, 
        readById,
        update, 
        //delet,
        remove,
        objectById } = require('../controllers/libroController');

router.post('/', create);

router.get('/', read);

router.get('/:id', readById);

router.put('/:id', update);

router.delete('/:id', remove);

router.param('id', objectById);

module.exports = router;