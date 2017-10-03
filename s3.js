const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('./config');
AWS.config.update({
  accessKeyId: config.AWS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// // DELETE
// s3.deleteObject(
//   {
//     Bucket: 'sos-s3-test',
//     Key: 'non-existant.txt'
//   },
//   function (err, data) {
//     if (err) {
//       console.log(err, err.stack);
//     }
//     else {
//       console.log(data);
//     }
//   }
// );
//
// // PUT
// s3.putObject(
//   {
//     Body: fs.createReadStream('./spreadsheet.txt'),
//     Bucket: 'sos-s3-test',
//     Key: 'spreadsheet.txt',
//     Tagging: 'client=vicky'
//   },
//   function (err, data) {
//     if (err) {
//       console.log(err, err.stack);
//     }
//     else {
//       console.log(data);
//     }
//   }
// );

// PRESIGNED
s3.createPresignedPost(
  {
    Bucket: 'sos-s3-test',
    Fields: {
      key: 'unique-identifier/special_key.txt'
    }
  },
  function (err, data) {
    if (err) {
      console.error('Presigning post data encountered an error', err);
    } else {
      console.log('The post data is', data);
    }
  }
);


const foo = {
  url: 'https://s3.amazonaws.com/sos-s3-test',
  fields: {
    key: 'special_key',
    bucket: 'sos-s3-test',
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': 'AKIAI5CIG4IVJTIWLQXA/20171003/us-east-1/s3/aws4_request',
    'X-Amz-Date': '20171003T152159Z',
    Policy: 'eyJleHBpcmF0aW9uIjoiMjAxNy0xMC0wM1QxNjoyMTo1OVoiLCJjb25kaXRpb25zIjpbeyJrZXkiOiJzcGVjaWFsX2tleSJ9LHsiYnVja2V0Ijoic29zLXMzLXRlc3QifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBSTVDSUc0SVZKVElXTFFYQS8yMDE3MTAwMy91cy1lYXN0LTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAxNzEwMDNUMTUyMTU5WiJ9XX0=',
    'X-Amz-Signature': '332fd1b2740c0678976bbff03aecf0a0a6f4d5ed87245d2b85c490b58dec94b4'
  }
}