var fs = require("fs");
var axios = require("axios");


const translate = (postText) => {


    var data ={
    "data": [
        {
            "original": `${postText}`
        }
    ],
    "from": "EN",

    "to": "UK"
}

    var config = {
        method: 'post',
        url: 'https://script.google.com/macros/s/AKfycbxaVydkWWHjyytFU3Tlomsb1_VjTZJQYq57u0iBXLOokMDsJr_KSqldRFbOyVQzv2ka/exec',
        headers: { },
        data : data
      };
      axios(config)
      .then(response => {response.data.data[0].translated});
      
   
      // .catch(error => {
      //   console.log(error);
      // }); 
  
    }
//translate("I want more coffee today than yesterday The\n fresh charges against the former CEO come just a day after his")
module.exports = translate;