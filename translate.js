var fs = require("fs");
var axios = require("axios");
//let postText = 'I want more coffee today than yesterday\n\nThe fresh charges against the former CEO come just a day after his arrest by Bahamian authorities at the request of U.S. authorities.  Just hours after Bankman-Fried’s arrest, SEC announced they were preparing to file charges against the FTX co-founder, which will be separate from the ones leading to his most recent arrest in the Bahamas.\n\nDELIVERED EVERY MONDAY\nSubscribe to\nthe Law Decoded newsletter\nEmail Address\nSubscribe\nBy subscribing, you agree to our\nTerms of Services and Privacy Policy'


function translate(postText) {
  console.log("Translation started...")
  // oldText = JSON.parse(postText)
  newText = postText

    var data ={
    "data": [
        {
            "original": `${newText}`
        }
    ],
    "from": "EN",

    "to": "UK"
}
console.log(`Type of data : ${typeof(data)}`)




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
       //console.log(`rePa: ${rePa.data}`)
       var reTra = rePa.data[0].translated;
       //console.log(reTra);
       return reTra

      })
      .catch(function (error) {
        console.log(error);
      }); }

//translate("The United States Securities and Exchange Commission (SEC) has filed charges against Sam Bankman-Fried, the former CEO of now-bankrupt crypto exchange FTX. \n\nThe")


//translate("I want more coffee today than yesterday The\n fresh charges against the former CEO come just a day after his")
module.exports = translate;