const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");

const getAllOrder = async () => {

    try {
        let pool = await sql.connect(config)
        let orders = await pool.request()
            .query(`select * from Orders o 
                inner join OrdersDetail od on od.Order_Id = o.Id 
                inner join Product p on p.Id = od.ProductId`)
            
        let result = orders.recordset;
        return result;
    } catch (error) {
        new Error('order get all service error ', error);
    }
    pool1.on('error', err => {
        console.log(err)
    })
}

const getByIdOder = async (id) => {
    try {
        let pool = await sql.connect(config)
        let orders = await pool.request()
            .input('Id', sql.Int, id)
            .query(`select * from Orders o 
                    inner join OrdersDetail od on od.Order_Id = o.Id 
                    inner join Product p on p.Id = od.ProductId where o.Id = @Id `)
            
        let result = orders.recordset;
        return result;
    } catch (error) {
        new Error('order get by id service error ', error)
    }

    pool1.on('error', err => {
        console.log(err)
    })
}


module.exports = {getAllOrder,getByIdOder}