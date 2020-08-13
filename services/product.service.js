const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");

const proAllProduct = async () => {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .query('select * from Product')
        let result = result1.recordset;
        return result;

    } catch (error) {
        new Error('product get all service error ', error)
    }

    pool1.on('error', err => {
        console.log(err)
    })
}

const proProductById = async (id) => {
    try {

        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('Id', sql.Int, id)
            .query('select * from Product where Id = @Id')

        let result = result1.recordset[0];
        return result;
    } catch (error) {
        new Error('product get by id service error ', error)
    }

    pool1.on('error', err => {
        console.log(err)
    })
}


module.exports = { proAllProduct, proProductById }