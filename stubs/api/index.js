const router = require('express').Router();

module.exports = router;

router.get('/teachers', (request, response) => {
    response.send(require('../json/teachers/success.json'))
  })
