const client = require('./connection');
// client.cluster.health({}, (err, resp, status) => {
//   console.log("-- Client Health --", resp);
// });
client.count({index: 'gov',type: 'constituencies'},(err,resp,status) => {  
  console.log("constituencies",resp);
});
