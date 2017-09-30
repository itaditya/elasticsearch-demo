const client = require('./connection.js');
client.delete({
  index: 'gov',
  id: '1',
  type: 'constituencies'
}, (err, resp, status) => {
  console.log(resp);
});
