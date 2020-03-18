const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');
const router = express.Router();

router //routes that dont require  ids
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router //routes that require ids
  .route('/:id')
  .get(getBootcamp)
  .delete(deleteBootcamp)
  .put(updateBootcamp);

module.exports = router;
