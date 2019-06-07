var client = require('./elastic_connection.js');

client.delete({  
  index: 'ad',
  id: '1',
  type: 'ads'
},function(err,resp,status) {
    console.log(resp);
});
