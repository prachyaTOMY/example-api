const sql = require('mssql');
const config = require('../config/config');
const Promise = require("bluebird");
const profileService = require("../services/profile.service");

const profileById = async (req, res) => {
    let id = req.params.id;
    try {
        let result = await profileService.profileById(id);
        res.send({ data : result })
        .status(200);
    } catch (error) {
        new Error('controller get profile err ',error)
    }

}



module.exports = {profileById}