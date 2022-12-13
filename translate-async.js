var fs = require("fs");
var axios = require("axios");


async function getData(postText) {
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

	const response = await axios.post('https://script.google.com/macros/s/AKfycbxaVydkWWHjyytFU3Tlomsb1_VjTZJQYq57u0iBXLOokMDsJr_KSqldRFbOyVQzv2ka/exec', config);
	console.log(response)
};



getData("I want more coffee today than yesterday The\n fresh charges against the former CEO come just a day after his")
module.exports = getData;


// const newPost = {
//   userId: 1,
//   title: 'A new post',
//   body: 'This is the body of the new post'
// };

// const sendPostRequest = async () => {
//   try {
//       const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//       console.log(resp.data);
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);