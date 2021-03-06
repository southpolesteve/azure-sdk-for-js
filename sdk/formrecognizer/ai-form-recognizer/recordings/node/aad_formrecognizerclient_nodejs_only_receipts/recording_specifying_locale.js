let nock = require('nock');

module.exports.hash = "32d92add86286f2f610b9db8a55092f0";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1331',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '2554718a-c224-4eaa-947e-80df5e3d2400',
  'x-ms-ests-server',
  '2.1.11251.20 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=AibZ6zyygGBLj7vuMouxmF_GLH8mAQAAADcxStcOAAAA; expires=Sun, 20-Dec-2020 21:50:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 Nov 2020 21:50:46 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyze', {"source":"https://storageaccount/testingdata/contoso-allinone.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/30a4f4c3-735f-4e75-9ce4-6695adb8a26d',
  'x-envoy-upstream-service-time',
  '786',
  'apim-request-id',
  '30a4f4c3-735f-4e75-9ce4-6695adb8a26d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:47 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/30a4f4c3-735f-4e75-9ce4-6695adb8a26d')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-20T21:50:48Z","lastUpdatedDateTime":"2020-11-20T21:50:48Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '12',
  'apim-request-id',
  'd2257b08-e0be-4695-aa68-0811813a838f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:47 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/30a4f4c3-735f-4e75-9ce4-6695adb8a26d')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-20T21:50:48Z","lastUpdatedDateTime":"2020-11-20T21:50:48Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '519a4085-3e0e-445e-aef4-50303f7b258a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:47 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/30a4f4c3-735f-4e75-9ce4-6695adb8a26d')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-20T21:50:48Z","lastUpdatedDateTime":"2020-11-20T21:50:50Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0.1273,"width":1688,"height":3000,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.99},"MerchantName":{"type":"string","valueString":"Contoso Contoso","text":"Contoso Contoso","boundingBox":[380.9,282.9,1116,473.2,1025,824.4,290,634],"page":1,"confidence":0.989},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[298.3,676.5,844.6,781.5,810.7,958,264.4,853],"page":1,"confidence":0.993},"MerchantPhoneNumber":{"type":"phoneNumber","valuePhoneNumber":"+919876543210","text":"987-654-3210","boundingBox":[271,1000,651,1049,643,1125,264,1075],"page":1,"confidence":0.995},"TransactionDate":{"type":"date","valueDate":"2019-10-06","text":"6/10/2019","boundingBox":[259,1224,510,1246,505,1331,255,1312],"page":1,"confidence":0.995},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[527,1248,681,1262,675,1341,522,1332],"page":1,"confidence":0.995},"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[244,1581,288,1584,285,1678,241,1675],"page":1,"confidence":0.919},"Name":{"type":"string","valueString":"Cappuccino","text":"Cappuccino","boundingBox":[306,1585,658,1598,657,1688,304,1679],"page":1,"confidence":0.982},"TotalPrice":{"type":"number","valueNumber":2.2,"text":"$2.20","boundingBox":[1106,1579,1260,1574,1263,1656,1108,1662],"page":1,"confidence":0.971}}},{"type":"object","valueObject":{"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[227,1839,278,1839,277,1924,226,1924],"page":1,"confidence":0.918},"Name":{"type":"string","valueString":"BACON & EGGS","text":"BACON & EGGS","boundingBox":[294,1839,737,1839,737,1924,294,1924],"page":1,"confidence":0.892},"TotalPrice":{"type":"number","valueNumber":9.5,"text":"$9.5","boundingBox":[1134,1948,1252,1948,1252,2041,1134,2041],"page":1,"confidence":0.969}}}]},"Tax":{"type":"number","valueNumber":11.7,"text":"11.70","boundingBox":[1139,2228,1309,2228,1308,2313,1138,2313],"page":1,"confidence":0.971},"Total":{"type":"number","valueNumber":14.5,"text":"$14.50","boundingBox":[1033,2623,1376,2641,1370,2758,1027,2740],"page":1,"confidence":0.99}}}]}}, [
  'Content-Length',
  '2537',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '25',
  'apim-request-id',
  '674b361b-1d22-40c9-b4c5-58453c2ca0ff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:53 GMT'
]);
