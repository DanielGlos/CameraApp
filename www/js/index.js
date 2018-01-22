
function openCamera(srcType) {

    var source = Camera.PictureSourceType.CAMERA;
    if (srcType.localeCompare('cam') != 0)
        source = Camera.PictureSourceType.PHOTOLIBRARY;

    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: source,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        displayImage(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function displayImage(imgUri) {

    var elem = document.getElementById('img_foto');
    elem.width = 300;
    elem.height = 500;
    elem.src = imgUri;
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();