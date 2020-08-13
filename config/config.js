const configdb = {
    user: '...username',
    password: '...password',
    server: 'localhost\\SQLEXPRESS',
    database: 'ExapmleAPI',
    port: 1433,
    options: {
        encrypt: true,
        enableArithAbort: true
    },
}

module.exports = configdb;
