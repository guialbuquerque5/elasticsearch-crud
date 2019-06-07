var client = require('./elastic_connection.js');

client.search({  
  index: 'ad',
  type: 'ads',
  body: {
    query: {
      match: { "title": "Resistor" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
