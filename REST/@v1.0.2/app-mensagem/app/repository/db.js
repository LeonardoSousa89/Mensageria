const db=require('../knexfile')['development']
const knex=require('knex')(db)

module.exports=knex