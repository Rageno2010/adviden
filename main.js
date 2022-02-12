Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:1
});
Webcam.attach("#camera");

function cap123(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='imgcap' src='"+data_uri+"'>";

    })
}
console.log("ml5 version",ml5.version);
classifer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WQlKdCq_4/model.json",modelloaded)

function modelloaded(){
    console.log("model loaded successfully")
}

function iden123(){ 
    var img = document.getElementById("imgcap")
    classifer.classify(img,gotresult)
}
function gotresult (error,result){
    if (error){
        console.log(error)
    }
    else{
        console.log(result)
        
        document.getElementById("objectname").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);

    }
}