const sql = require('mssql');
const config = require('../config/config');

const getallUser = async () => {
    try {
        let pool = await sql.connect(config)
        let resultuser = await pool.request()
            .query('select * from Users')
            
        let result = resultuser.recordset[0]
        return result;
    } catch (error) {
        new Error('user login error ', error);
    }


    pool.on('error', err => {
        console.error(err)
    })
}

const logIn = async (email, password) => {
    try {
        let pool = await sql.connect(config)
        let resultuser = await pool.request()
            .input('Email', sql.VarChar, email)
            .input('Password', sql.VarChar, password)
            .query('SELECT * FROM Users WHERE Email = @Email AND Password = password');
            
        let result = resultuser.recordset[0]
        return result;
    } catch (error) {
        new Error('user login error ', error);
    }
    pool.on('error', err => {
        console.error(err)
    })
}

module.exports = {getallUser, logIn}