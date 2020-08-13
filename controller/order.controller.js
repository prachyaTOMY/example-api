const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");
const orderService = require('../services/order.service');

const getAllOrder = async (req, res) => {
    try {
        let result = await orderService.getAllOrder();
        res.send({ data : result })
        .status(200);
    } catch (error) {
        new Error('controller get all order. err ', error)
    }
}

const getByIdOder = async (req, res) => {
    let id = req.params.id;
    try {
        let result = await orderService.getByIdOder(id);
        res.send({ data : result })
        .status(200);
    } catch (error) {
        new Error('controller get by id order. err ', error)
    }
}

module.exports = {getAllOrder, getByIdOder}