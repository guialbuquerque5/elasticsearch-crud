var myBody = { index: {_index: 'ad', _type: 'ads', _id: '1' } },  
{
    "title": "Resistor",
    "descrition": 'resistor de 200k ohms',
    "location":{
    	"lat": "-25.4284",
        "long": "-49.2733"
    }

}

client.bulk({
  index: 'ad',
  type: 'ads',
  body: myBody
};
