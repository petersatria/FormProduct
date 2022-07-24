const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product');

router.get('/', ProductController.showAll)
router.get('/new', ProductController.newPage)
router.post('/', ProductController.newProduct)
router.get('/:id', ProductController.detailPage)
router.get('/:id/edit', ProductController.editPage)
router.put('/:id', ProductController.editProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router;