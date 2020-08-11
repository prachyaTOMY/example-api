const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");

const getAllOrder = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .query(`select * from Orders o 
            inner join OrdersDetail od on od.Order_Id = o.Id 
            inner join Product p on p.Id = od.ProductId`)
        
    let result = result1.recordset[0];

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}

const getByIdOder = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('Id', sql.Int, id)
        .query(`select * from Orders o 
                inner join OrdersDetail od on od.Order_Id = o.Id 
                inner join Product p on p.Id = od.ProductId where o.Id = @Id `)
        
    let result = result1.recordset[0];

    res.send({ data : result });

    pool1.on('error', err => {
        console.log(err)
    })
}


module.exports = {getAllOrder,getByIdOder}