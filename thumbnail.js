function Thumbnail(sourceImageUrl, height, width) {
    var subscriptionKey = "e59470407d82483288140d96cecb8ef0";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/generateThumbnail";

    var params = "?width=" + width + "&height=" + height + "&smartCropping=true";

    // Create the HTTP Request object.
    var xhr = new XMLHttpRequest();

    // Identify the request as a POST, with the URL and parameters.
    xhr.open("POST", uriBase + params);

    // Add the request headers.
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);

    // Set the response type to "blob" for the thumbnail image data.
    xhr.responseType = "blob";

    // Process the result of the REST API call.
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            // Thumbnail successfully created.
            if (xhr.status === 200) {
                // Show response headers.
                var s = JSON.stringify(xhr.getAllResponseHeaders(), null, 2);
                document.getElementById("responseTextArea").value = JSON.stringify(xhr.getAllResponseHeaders(), null, 2);

                // Show thumbnail image.
                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(this.response);
                document.querySelector("#thumbnailImage").src = imageUrl;
            } else {
                // Display the error message. The error message is the response body as a JSON string.
                // The code in this code block extracts the JSON string from the blob response.
                var reader = new FileReader();

                // This event fires after the blob has been read.
                reader.addEventListener('loadend', (e) => {
                    document.getElementById("responseTextArea").value = JSON.stringify(JSON.parse(e.srcElement.result), null, 2);
                });

                // Start reading the blob as text.
                reader.readAsText(xhr.response);
            }
        }
    }

    // Execute the REST API call.
    xhr.send('{"url": ' + '"' + sourceImageUrl + '"}');
};