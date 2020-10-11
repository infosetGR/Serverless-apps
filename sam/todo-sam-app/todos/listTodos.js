const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
    // TODO implement
    
        
    var params = {
          TableName : process.env.TODO_TABLE,
        //   FilterExpression : 'username = :username',
        //   ExpressionAttributeValues : {':username' : username}
        };

    const results = await dynamo.scan(params).promise();
    

    const response = {
        statusCode: 200,
        body: JSON.stringify(results.Items),
        headers:{ "Access-Control-Allow-Origin":"*"}
    };
    return response;
};