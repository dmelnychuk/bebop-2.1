var fs = require("fs");
var axios = require("axios");


async function translateData(postText) {
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

	let response = await axios(config);
	response = JSON.stringify(response.data.data[0].translated);
    console.log(`Translated data type: ${typeof(response)}`)
    console.log(JSON.parse(response));
    
    return response
};


//  translateData(
//     `Immediate Edge

//     Furthermore, it is your responsibility to ensure that your use of this website complies with any applicable laws, regulations, or directives in your place of residency. It should be noted that in the United Kingdom, firms and individuals are not permitted to market CFDs based on crypto assets. Due of the financial risks involved, the FCA's PS 20/10 prohibits such actions. We do not advocate the marketing of CFDs based on crypto assets in the UK, and we do not accept clients from the UK or the US. Continue to exercise caution!`
//  )
module.exports = translateData;
