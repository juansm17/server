
module.exports = {
    port: process.env.PORT || 3003,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/crud',
    SECRET_TOKEN: 'miclavedetokens',



}
