const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('./config');
AWS.config.update({
  accessKeyId: config.AWS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// DELETE
s3.deleteObject(
  {
    Bucket: 'sos-s3-test',
    Key: 'non-existant.csv'
  },
  function (err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  }
);

// PUT
s3.putObject(
  {
    Body: fs.createReadStream('./spreadsheet.csv'),
    Bucket: 'sos-s3-test',
    Key: 'spreadsheet.csv',
    Tagging: 'client=vicky'
  },
  function (err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  }
);