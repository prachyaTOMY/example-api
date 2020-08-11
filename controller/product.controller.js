const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");

const proAllProduct = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .query('select * from Product')
        
    let result = result1.recordset;

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}

const proProductById = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('Id', sql.Int, id)
        .query('select * from Product where Id = @Id')
        
    let result = result1.recordset[0];

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}


module.exports = {proAllProduct,proProductById}