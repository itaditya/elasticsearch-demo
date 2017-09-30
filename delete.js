const client = require('./connection');
client.indices.delete({
  index: 'gov'
}, (err, resp, status) => {
  console.log("delete", resp);
});
