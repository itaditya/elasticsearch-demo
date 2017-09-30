const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'https://site:0b22fe5bb16cad9dea0efb45b5d29928@ori-eu-west-1.searchly.com',
  log: 'error'
});
module.exports = client;
