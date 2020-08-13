const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");
const productService = require('../services/product.service');

const proAllProduct = async (req, res) => {
    try {
        let result = await productService.proAllProduct();
        res.send({ data : result })
        status(200);
    } catch (error) {
        new Error('controller get all product. err ', error);
    }

}

const proProductById = async (req, res) => {
    let id = req.params.id;
    try {
        let result = await productService.proProductById(id);
        res.send({ data : result })
        .status(200);
    } catch (error) {
        new Error('controller get by id product. err ', error)
    }
}


module.exports = { proAllProduct, proProductById }