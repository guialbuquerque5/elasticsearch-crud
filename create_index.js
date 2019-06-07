var client = require('./elastic_connection.js');

client.indices.create({  
  index: 'ad'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
