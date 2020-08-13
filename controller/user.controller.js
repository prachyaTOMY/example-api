const sql = require('mssql');
const config = require('../config/config');
const userService = require('../services/user.service');

const getallUser = async (req, res) => {
    try {
        let result = await userService.getallUser();
        res.send({ data : result })
        .status(200);
    } catch (error) {
        new Error('get all not user. err ',error)
    }
  
}

const logInUser = async (req, res) => {
    try {
        let { email, password } = req.query;
        let result = await userService.logIn(email,password);
        res.send({data : result})
        .status(200);
    } catch (error) {
        new Error('log in user. err ',error)
    }
}


module.exports = {getallUser, logInUser}