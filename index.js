const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'myKeyId',
  secretAccessKey: 'secretKey',
  region: 'us-east-1'
});

const db = new AWS.DynamoDB({
  endpoint: new AWS.Endpoint('http://localhost:8000')
});


function createSpreadsheets() {
  const params = {

  };
}

// {
//   id: "", <- primary index
//   exportName: "",
//     createdDate: "", <- index
//   storagePolicy: {},
//   status: "",
//     exportParameters : {
//   outputFormat: "",
//     locale: "",
//     clientCode: "",
//     filterParameters: {}
// }

db.listTables(function (err, data)
{
  console.log('listTables',err,data);
});