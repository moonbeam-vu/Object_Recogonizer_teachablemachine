Webcam.set({
    width:500,
    height:500,
    image_format:'png',
    png_quality:90,
})
Webcam.attach('#webcam')
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById('snapshot').innerHTML='<img id="picture" src="'+data_uri+'">'
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xi683XPUE/model.json',modelloaded)
function modelloaded(){
    console.log('model is working')
}
function identify(){
    img=document.getElementById('picture')
    classifier.classify(img,gotresult)
}
function gotresult(error,result){
if(error){
    console.log(error)
}
else{
    console.log(result)
    document.getElementById('object').innerHTML='object:'+result[0].label
    document.getElementById('accuracy').innerHTML='accuracy:'+result[0].confidence.toFixed(3)
}
}