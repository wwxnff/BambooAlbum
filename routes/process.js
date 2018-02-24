
var axios = require('axios');

var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";

        // Request parameters.
        var 

axios.get(uriBase, {
    params : {
            "visualFeatures": "Categories,Description,Color",
            "details": "",
            "language": "en",
        }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
