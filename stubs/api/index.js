/*const router = require('express').Router();

module.exports = router;

router.get('/teachers', (request, response) => {
    response.send(require('../json/teachers/success.json'))
  })

router.get('/account', (request, response) => {
  response.send(require('../json/account/account.json'))
})

router.post('/login', (request, response) => {
  response.send(require('../json/login/success.json'))
})*/
const router = require('express').Router();

router.get('/teachers', (request, response) => {
    response.send(require('../json/teachers/success.json'))
  })

router.get('/account', (request, response) => {
  response.send(require('../json/account/account.json'))
})

router.post('/login', (request, response) => {
  const login  = request.body.login;
  const password  = request.body.password;
  
  try {
   const users = require('../json/account/account.json');
   const user = users.data.find(user => user.login === login && user.password === password);
 
   if (!user) {
     return response.status(401).send('Неверные данные'); 
   } 
 
   const responseObject = {
     login: user.login,
   }
   return response.json(responseObject);
  } catch (error) {
     console.error('Error reading file:', error);
     response.status(400).send('Internal server error');
  }
})


module.exports = router;
