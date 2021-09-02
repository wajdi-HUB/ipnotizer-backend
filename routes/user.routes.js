const { Router } = require('express');
const users =require('../controllers/user.controller');
module.exports=(app)=>{
    

    app.post('/users',users.create);
    app.get('/users',users.findAll);
    app.get('/users/:userId',users.findOne);
    app.put('/users/:userId',users.update);
    app.delete('/users/:userId',users.delete);
    app.post('/users/login', users.login)
    
}
