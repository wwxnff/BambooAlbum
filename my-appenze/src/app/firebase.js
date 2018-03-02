
src="https://www.gstatic.com/firebasejs/4.10.0/firebase.js";

var config = {
            apiKey: "AIzaSyCAdTi8UrJTkpCtK-g2PGG3ftjT1mIZYwk",
            authDomain: "bingophoto-bdc48.firebaseapp.com",
            databaseURL: "https://bingophoto-bdc48.firebaseio.com",
            projectId: "bingophoto-bdc48",
            storageBucket: "bingophoto-bdc48.appspot.com",
            messagingSenderId: "931072478542"
        };
        firebase.initializeApp(config);
        function upload(event) {
            var image = event.target.files[0];
            var file = URL.createObjectURL(image);
            console.log(file);
            console.log(image);
            var storageRef = firebase.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
            };
            var uploadTask = storageRef.child('images/' + image.name).put(image);

            document.getElementById("img").src = URL.createObjectURL(image);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                }, function (error) {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;

                        case 'storage/canceled':
                            // User canceled the upload
                            break;


                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                }, function () {
                    // Upload completed successfully, now we can get the download URL
                    var downloadURL = uploadTask.snapshot.downloadURL;
                });
          }