const https = require('https');
const rp = require('request-promise');
const fs = require('fs');

const options = {
  method: 'POST',
  uri: 'https://s3.amazonaws.com/sos-s3-test',
  formData: {
    key: 'unique-identifier/special_key.txt',
    bucket: 'sos-s3-test',
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': 'AKIAI5CIG4IVJTIWLQXA/20171003/us-east-1/s3/aws4_request',
    'X-Amz-Date': '20171003T171906Z',
    Policy: 'eyJleHBpcmF0aW9uIjoiMjAxNy0xMC0wM1QxODoxOTowNloiLCJjb25kaXRpb25zIjpbeyJrZXkiOiJ1bmlxdWUtaWRlbnRpZmllci9zcGVjaWFsX2tleS50eHQifSx7ImJ1Y2tldCI6InNvcy1zMy10ZXN0In0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJYLUFtei1DcmVkZW50aWFsIjoiQUtJQUk1Q0lHNElWSlRJV0xRWEEvMjAxNzEwMDMvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMTcxMDAzVDE3MTkwNloifV19',
    'X-Amz-Signature': 'd427a69ddf56360ee5461797bd6436ee2e020f47d724dbfb1a649603ad235773',
    file: {
      value: fs.createReadStream('./spreadsheet.txt'),
      options: {
        filename: 'spreadsheet.txt',
        contentType: 'text/plain'
      }
    }
  },
  headers: {
    /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
  }
};

rp(options)
  .then(function (body) {
    // POST succeeded...
    console.log(body);
  })
  .catch(function (err) {
    // POST failed...
    console.log(err)
  });