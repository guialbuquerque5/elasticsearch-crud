var client = require('./elastic_connection.js');
index_name = 'ad';
client.index({  
  index: index_name,
  id: '1',
  type: 'ads',
  body: {
	"title":'Resistor',
	"descrition": 'resistor de 200k ohms',
  	"location":{
		"lat": "-25.4284",
		"long": "-49.2733"
	}
  }
},function(err,resp,status) {
    console.log(resp);
});
