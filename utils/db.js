/* config lowdb */
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
/* end config lowdb */

db.defaults({ posts: [], user: {}}).write()
module.exports = db