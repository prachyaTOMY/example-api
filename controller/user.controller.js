const sql = require('mssql');
const config = require('../config/config');

const getallUser = async (req, res) => {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .query('select * from Users')
        
    let result = result1.recordset[0]

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}

const logIn = async (req, res) => {
    let { email, password } = req.body;
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('Email', sql.NVarChar, email)
        .input('Password', sql.NVarChar, password)
        .query('select * from Users where = @Email and @Password')
        
    let result = result1.recordset[0]

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}


module.exports = {getallUser, logIn}