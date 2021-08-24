import cv from "./opencv.js";

let video = document.getElementById('videoInput');
video.width = 800;
video.height = 600;
navigator.mediaDevices
    .getUserMedia({ video: true, audio:false })
    .then(function(stream){
        video.srcObject = stream;
        video.play();
        
        let src = new cv.Mat(video.height, video.clientWidth, cv.CV_8UC4);
        let dst = new cv.Mat(video.height, video.clientWidth, cv.CV_8UC1);
        let cap = new cv.VideoCapture(video);

        const FPS = 30;

        function processVideo(){
            try{
                if (!streaming){
                    // clean and stop
                    src.delete();
                    dst.delete();
                    return;
                }
                let begin = Date.now();
                // start processing
                cap.read(src);
                cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY);
                cv.imshow('OutputVideo', dst);

                let delay = 1000/FPS - (Date.now() - begin);
                setTimeout(processVideo, delay);
            } catch(err){
                utils.printError(err);
            }
        }

        setTimeout(processVideo, 0);
    })
    .catch(function(err){
        console.log("An error occurred! " + err);
    });
