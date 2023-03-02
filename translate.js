
// The code is using nodeJS and axios to make the request to the API
// The code is using a function called translate that takes a string as parameter and returns the translated string
// The code is using the google translate API


var fs = require("fs");
var axios = require("axios");

const translate = (postText) => {
  var data = {
    data: [
      {
        original: `${postText}`,
      },
    ],
    from: "ES",

    to: "UK",
  };

  var config = {
    method: "post",
    url: "https://script.google.com/macros/s/AKfycbxaVydkWWHjyytFU3Tlomsb1_VjTZJQYq57u0iBXLOokMDsJr_KSqldRFbOyVQzv2ka/exec",
    headers: {},
    data: data,
  };

  return axios(config).then((response) => {
    response.data.data[0].translated;
    console.log(response.data.data[0].translated);
  });

  // .catch(error => {
  //   console.log(error);
  // });
};

module.exports = translate;
 translate("I have never been to London")
