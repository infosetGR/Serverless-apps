const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
    // TODO implement
    
    const item = JSON.parse(event.body)
    
    if (!item.id || item.id==='-1')
        item.id=Math.random()*Math.pow(10,16)+''
    
    var params = {
        TableName: process.env.TODO_TABLE,
        Item: item
        };

 const result = await dynamo.put(params).promise(); 
 
    const response = {
        statusCode: 200,
        body: '',
        headers:{ "Access-Control-Allow-Origin":"*"}
    };
    return response;
};
