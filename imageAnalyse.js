function processImage(sourceImageUrl) {
    var subscriptionKey = "e59470407d82483288140d96cecb8ef0";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
    // we should NOT change our region as we are using free trial account
    
    var params = { // Request parameters.
        "visualFeatures": "Tags",
        "details": "",
        "language": "en",
    };

    $.ajax({ // Perform the REST API call.
        url: uriBase + "?" + $.param(params),

        beforeSend: function (xhrObj) { // Request headers.
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",
        data: '{"url": ' + '"' + sourceImageUrl + '"}', // Request body.
    })

        .done(function (data) { // Return the tag data
            return JSON.stringify(data, null, 2);
        })

        .fail(function (jqXHR, textStatus, errorThrown) { // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
            alert(errorString);
        });
};
module.exports = processImage;
