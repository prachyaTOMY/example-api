const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");

const profileById = async (id) => {

    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('Id', sql.Int, id)
            .query('select * from Profiles where UserId = @Id')
            
        let result = result1.recordset[0];
        return result;

    } catch (error) {
        new Error('Profiles service error ', error)
    }

    pool1.on('error', err => {
        console.log(err)
    })
}



module.exports = {profileById}