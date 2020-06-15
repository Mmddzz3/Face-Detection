const video = document.getElementById('video');

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromURi('/models'),
    faceapi.nets.faceLandmark68Net.loadFromURi('/models'),
    faceapi.nets.faceRecognitionNet.loadFromURi('/models'),
    faceapi.nets.faceExpressionNetloadFromURi('/models'),
]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

