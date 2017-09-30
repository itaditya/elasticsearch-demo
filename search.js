const client = require('./connection.js');
//search for constituency with name Ipswich
client.search({
  index: 'gov',
  type: 'constituencies',
  body: {
    query: {
      match: {
        "constituencyname": "Ipswich"
      }
    },
  }
}, (error, response, status) => {
  if (error) {
    console.log("search error: " + error)
  } else {
    console.log("--- Response ---");
    console.log(response);
    console.log("--- Hits ---");
    response.hits.hits.forEach(hit => console.log(hit));
  }
});

//search for constituency names starting with any three characters followed by 'wich':
client.search({
  index: 'gov',
  type: 'constituencies',
  body: {
    query: {
      wildcard: {
        "constituencyname": "???wich"
      }
    },
  }
}, (error, response, status) => {
  if (error) {
    console.log("search error: " + error)
  } else {
    console.log("--- Response ---");
    console.log(response);
    console.log("--- Hits ---");
    response.hits.hits.forEach(hit => console.log(hit));
  }
});

//search for constituency names starting with one or more characters followed by 'wich':
client.search({
  index: 'gov',
  type: 'constituencies',
  body: {
    query: {
      wildcard: {
        "constituencyname": "+.wich"
      }
    },
  }
}, (error, response, status) => {
  if (error) {
    console.log("search error: " + error)
  } else {
    console.log("--- Response ---");
    console.log(response);
    console.log("--- Hits ---");
    response.hits.hits.forEach(hit => console.log(hit));
  }
});
