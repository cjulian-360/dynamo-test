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
    TableName : 'Movies',
    KeySchema: [
      { AttributeName: 'year', KeyType: 'HASH'},
      { AttributeName: 'title', KeyType: 'RANGE' }
    ],
    AttributeDefinitions: [
      { AttributeName: 'year', AttributeType: 'N' },
      { AttributeName: 'title', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };

  db.createTable(params, function(err, data) {
    if (err) {
      document.getElementById('textarea').innerHTML = 'Unable to create table: ' + '\n' + JSON.stringify(err, undefined, 2);
    } else {
      document.getElementById('textarea').innerHTML = 'Created table: ' + '\n' + JSON.stringify(data, undefined, 2);
    }
  });
}

// {
//   id: '', <- primary index
//   exportName: '',
//     createdDate: '', <- index
//   storagePolicy: {},
//   status: '',
//     exportParameters : {
//   outputFormat: '',
//     locale: '',
//     clientCode: '',
//     filterParameters: {}
// }

db.listTables(function (err, data)
{
  console.log('listTables',err,data);
});