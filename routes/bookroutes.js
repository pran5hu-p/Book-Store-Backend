const express = require('express');
const router = express.Router();
const { custommiddleware } = require('../middlewares/custom');
const controller = require('../controllers/book.controller');

router.get('/', controller.getallbooks)
router.get('/:id',custommiddleware, controller.getbookbyid)
router.post('/', controller.createbook)
router.delete('/:id', controller.deletebook)

module.exports = router;

