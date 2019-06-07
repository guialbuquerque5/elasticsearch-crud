var client = require('./elastic_connection.js');

index_name = 'ad'

client.indices.delete({index: index_name},function(err,resp,status) {  
  console.log("delete",resp);
});
