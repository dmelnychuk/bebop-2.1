var fs = require("fs");
var axios = require("axios");
//let postText = 'I want more coffee'


function translate(postText) {
  console.log("Translation started...")
  newText = JSON.parse(postText)

    var data =
  `{
    "data": [
        {
            "original": "${newText}"
        }
    ],
    "from": "EN",

    "to": "UK"
}`
console.log(`Post text : ${newText}`)

    var config = {
        method: 'post',
        url: 'https://script.google.com/macros/s/AKfycbxaVydkWWHjyytFU3Tlomsb1_VjTZJQYq57u0iBXLOokMDsJr_KSqldRFbOyVQzv2ka/exec',
        headers: { },
        data : data
      };
      
      axios(config)
      .then(function (response) {
       var reStr = JSON.stringify(response.data);
       var rePa = JSON.parse(reStr.toString());
       console.log(`rePa: ${rePa}`)
       var reTra = rePa.data[0].translated;
       console.log(reTra);
       return reTra

      })
      .catch(function (error) {
        console.log(error);
      }); }

//translate("The United States Securities and Exchange Commission (SEC) has filed charges against Sam Bankman-Fried, the former CEO of now-bankrupt crypto exchange FTX. \n\nThe")

module.exports = translate;