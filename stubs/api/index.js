const router = require('express').Router();

module.exports = router;

router.get('/teachers', (request, response) => {
    response.send(require('../json/teachers/success.json'))
  })

router.get('/account', (request, response) => {
  response.send(require('../json/account/account.json'))
})

router.post('/login', (request, response) => {
  response.send(require('../json/login/success.json'))
})