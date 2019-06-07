var client = require('./elastic_connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'ad',type: 'ads'},function(err,resp,status) {
  console.log("ads: ",resp);
});
